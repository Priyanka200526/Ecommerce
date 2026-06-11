import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        uniques: true
    },
    contact: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: function () {
            return !this.googleId
        }
    },
    fullname: { type: String, required: true },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    },
    googleId: {
        type: String,
    }
})

userSchema.pre("save",async function() {
    if(!this.isModified("password")) return
    let hash = await bcrypt.hash(this.password,10)
    this.password = hash
})

userSchema.methods.comparepassword = async function(password) {
  return await bcrypt.compare(password,this.password)  
}
const userModel = mongoose.model("user",userSchema)

export default userModel;