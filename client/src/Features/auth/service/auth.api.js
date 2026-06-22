import axios from "axios"

const Authapi = axios.create({
      baseURL: "/api/auth",
    withCredentials: true,
})

export async function registerapi({email,password,fullname,contact,isSeller}) {
    const response = await Authapi.post("/register",{
      email,password,fullname,contact,isSeller  
    })
     return response.data
}
export async function loginapi({email,password}) {
    const response = await Authapi.post("/login",{
      email,password  
    })
     return response.data
}

export async function getMe() {
    const response = await Authapi.get("/getme")
    return response.data
}
