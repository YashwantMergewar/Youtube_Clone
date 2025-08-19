import convertFormData from "./convertFormData.js";
import { fetchApi } from "./fetchConfig.js";

const uploadVideo = async (data) => {
    try {
        const formdata = await convertFormData(data);
        const response = await fetchApi("/videos", {
            method: "POST",
            body: formdata
        })
        return response;
    } catch (error) {
        throw new Error("Error while uploading video: " + error.message);
    }
}

const getAllVideos = async () => {
    try {
        const response = await fetchApi("/videos", {
            method: "GET"
        })
        return response;
    } catch (error) {
        throw new Error("Error while fetching videos: " + error.message);
    }
}

const getVideoById = async (id) => {
    try {
        const response = await fetchApi(`/videos/${id}`, {
            method: "GET"
        })
        return response;
    } catch (error) {
        throw new Error("Error while fetching video: " + error.message);
    }
}

const updateVideoDetails = async (id, data) => {
    try {
        const formdata = await convertFormData(data)
        const response = await fetchApi(`/videos/${id}`, {
            method: "PATCH",
            body: formdata
        })
        return response;
    } catch (error) {
        throw new Error("Error while updating video: " + error.message);
    }
}

const togglePublishStatus = async (id) => {
    try {
        const response = await fetchApi(`/videos/toggle/publish/${id}`, {
            method: "PATCH"
        })
        return response;
    } catch (error) {
        throw new Error("Error while toggling publish status: " + error.message);
    }
}

const deleteVideo = async (id) => {
    try {
        const response = await fetchApi(`/videos/${id}`, {
            method: "DELETE"
        })
        return response;
    } catch (error) {
        throw new Error("Error while deleting video: " + error.message)
    }
}

export {
    uploadVideo,
    getAllVideos,
    getVideoById,
    updateVideoDetails,
    togglePublishStatus,
    deleteVideo
}