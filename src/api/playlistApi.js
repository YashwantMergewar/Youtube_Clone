import { fetchApi } from "./fetchConfig"
import convertFormData from './convertFormData';

const createPlaylist = async (data) => {
    const formdata = await convertFormData(data)
    const response = await fetchApi("/playlists", {
        method: "POST",
        body: formdata
    })
    return response
}

const addVideoToPlaylist = async (playlistId, videoId) => {
    const response = await fetchApi(`/playlists/add/${videoId}/${playlistId}`, {
        method: "PATCH"
    })
    return response
}

const removeVideoFromPlaylist = async (playlistId, videoId) => {
    const response = await fetchApi(`/playlists/remove/${videoId}/${playlistId}`, {
        method: "PATCH"
    })
    return response
}

const getUserPlaylists = async (id) => {
    const response = await fetchApi(`/playlists/user/${id}`, {
        method: "GET"
    })
    return response
}

const getPlaylist = async (id) => {
    const response = await fetchApi(`/playlists/${id}`, {
        method: "GET"
    })
    return response
}

const deletePlaylist = async (id) => {
    const response = await fetchApi(`/playlists/${id}`, {
        method: "DELETE"
    })
    return response
}

const updatePlaylist = async (id, data) => {
    const formdata = await convertFormData(data)
    const response = await fetchApi(`/playlists/${id}`, {
        method: "PATCH",
        body: formdata
    })
    return response
}


export {
    createPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    getPlaylist,
    getUserPlaylists,
    deletePlaylist,
    updatePlaylist
}