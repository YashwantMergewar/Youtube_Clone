import { fetchApi } from "./fetchConfig.js";
import convertFormData from './convertFormData.js';

const addComment = async (id, data) => {
    try {
        const formdata = await convertFormData(data)
        const response = await fetchApi(`/comments/${id}`, {
            method: "POST",
            body: formdata
        })
        return response
    } catch (error) {
        throw new Error("Error while adding comment" + error.message)
    } 
}

const getAllComments = async (id) => {
    try {
        const response = await fetchApi(`/comments/${id}`, {
            method: "GET"
        })
        return response
    } catch (error) {
        throw new Error("Error while adding comment" + error.message)
    } 
}

const deleteComment = async (id) => {
    try {
        const response = await fetchApi(`/comments/c/${id}`, {
            method: "DELETE"
        })
        return response
    } catch (error) {
        throw new Error("Error while adding comment" + error.message)
    } 
}

const updateComment = async (id, data) => {
    try {
        const formdata = await convertFormData(data)
        const response = await fetchApi(`/comments/c/${id}`, {
            method: "PATCH",
            body: formdata
        })
        return response
    } catch (error) {
        throw new Error("Error while adding comment" + error.message)
    } 
}

export {
    addComment,
    getAllComments,
    deleteComment,
    updateComment
}
