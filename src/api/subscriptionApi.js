import { fetchApi } from "./fetchConfig.js";

const getSubscribedChannels = async (id) => {
    try {
        const response = await fetchApi(`/subscriptions/c/${id}`, {
            method: "GET"
        })
        return response;
    } catch (error) {
        throw new Error("Error while fetching subscribed channels: " + error.message);
    }
}

const getSubscribers = async (id) => {
    try {
        const response = await fetchApi(`/subscriptions/u/${id}`, {
            method: "GET"
        })
        return response
    } catch (error) {
        throw new Error("Error while fetching subscribers who subscribed to user's channel: " + error.message)
    }
}

const toggleSubscription = async (id) => {
    try {
        const response = await fetchApi(`/subscriptions/c/${id}`, {
            method: "POST"
        })
        return response
    } catch (error) {
       throw new Error("Error while toggling the channel subscription") 
    }
}

export {
    getSubscribedChannels,
    getSubscribers,
    toggleSubscription
}