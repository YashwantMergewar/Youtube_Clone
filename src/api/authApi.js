import { fetchApi } from "./fetchConfig.js";
import convertFormData from './convertFormData.js';


const register = async (data) => {
    const formdata = await convertFormData(data)
    const response = await fetchApi("/users/register", {
        method: "POST",
        body: formdata
    })
    return response
}

const login = async (data) => {
    const formdata = await convertFormData(data)
    const response = await fetchApi("/users/login", {
        method: "POST",
        body: formdata
    })
    const jsonData =  response.json()
    return jsonData
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
    logout
}