import { setLoading, setError, setUser } from "../state/auth.slice.js";
import { registerapi, loginapi,getMe } from "../service/auth.api.js";
import { useDispatch } from "react-redux"

export const useAuth = () => {
    const dispatch = useDispatch()

    async function handleRegister({ email, password, fullname, contact, isSeller }) {
        const data = await registerapi({ email, password, fullname, contact, isSeller })
        dispatch(setUser(data.user))
        return data.user
    }
    async function handleLogin({ email, password }) {
        const data = await loginapi({ email, password })
        dispatch(setUser(data.user))
        return data.user
    }
    async function handleGetMe() {
        try {
            dispatch(setLoading(true))
            const data = await getMe()
            dispatch(setUser(data.user))
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(setLoading(false))
        }
    }
    return {
        handleLogin, handleRegister,handleGetMe
    }
}