import { fetchApi } from "./fetchConfig";
import convertFormData from "./convertFormData.js";

const getCurrentUser = async () => {
    const response = await fetchApi("/users/current-user", {
        method: "GET"
    })
    return response
}

const changePassword = async (oldpass, newpass) => {
    const response = await fetchApi("/users/change-password", {
        method: "POST",
        body: JSON.stringify({ oldPassword: oldpass, newPassword: newpass })
    })
    return response
}

const updateAccountDetails = async (data) => {
    const formdata = await convertFormData(data)
    const response = await fetchApi("/users/update-account", {
        method: "PATCH",
        body: formdata 
    })
    return response
}

const updateUserAvatar = async (file) => {
    // if there is a need of user-id to be used in this function as parameter 
    const formdata = await convertFormData({ avatar: file })
    const response = await fetchApi("/users/update-avatar", {
        method: "PATCH",
        body: formdata  
    })
    return response
}

const updateUsercoverImage = async (file) => {
    const formdata = await convertFormData({ coverImage: file })
    const response = await fetchApi("/users/update-coverImage", {
        method: "PATCH",
        body: formdata    
    })
    return response
}

const getUserChannelProfile = async (username) => {
    const response = await fetchApi(`/users/c/${username}`, {
        method: "GET",
    })
    return response
}

const getWatchHistory = async () => {
    const response = await fetchApi("/users/watchHistory", {
        method: "GET"
    })
    return response
}

export {
    getCurrentUser,
    changePassword,
    updateAccountDetails,
    updateUserAvatar,
    updateUsercoverImage,
    getUserChannelProfile,
    getWatchHistory
}