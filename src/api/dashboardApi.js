import { fetchApi } from "./fetchConfig.js";

const getChannelStates = async () => {
    const response = await fetchApi("/dashboard/states", {
        method: "GET"
    })
    return response
}

const getChannelVideos = async (id) => {
    const response = await fetchApi(`/dashboard/videos/${id}`, {
        method: "GET"
    })
    return response
}

export {
    getChannelStates,
    getChannelVideos
}