import { fetchApi } from "./fetchConfig";

const toggleVideoLike = async (id) => {
    const response = await fetchApi(`/likes/toggle/v/${id}`, {
        method: "POST",
    })
    return response
}

const toggleCommentLike = async (id) => {
    const response = await fetchApi(`/likes/toggle/c/${id}`, {
        method: "POST"
    })
    return response
}

const getLikedVideos = async () => {
    const response = await fetchApi("/likes/videos", {
        method: "GET"
    })
    return response
}

export {
    toggleVideoLike,
    toggleCommentLike,
    getLikedVideos
}