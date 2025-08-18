import { fetchApi } from "./fetchConfig.js";


const register = async (data) => {
    const formdata = new FormData()
    Object.keys(data).forEach((key) => {
        if(data[key] !== undefined && data[key] !== null){
            formdata.append(key, data[key])
        }
    })

    const response = await fetchApi("/users/register", {
        method: "POST",
        body: JSON.stringify(formdata)
    })
    return response
}

const login = async (email, password) => {
    const response = await fetchApi("/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
    })
    return response
}

const logout = async () => {
    const response = await fetchApi("/users/logout", {
        method: "POST"
    }) 
    return response
}

export {
    register,
    login,
    getCurrentUser,
    logout
}