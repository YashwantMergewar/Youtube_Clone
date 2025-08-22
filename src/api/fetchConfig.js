async function refreshAccessToken(){
    try {
        const res = await fetch(`${process.env.API_BASE_URL}/users/refresh-token`, {
            'method' : 'POST',
            'credentials' : 'include'
        })
    
    
        if (res.ok) {
            const data = await res.json()
            localStorage.setItem("accessToken", data.accessToken)
            return data.accessToken
        }else{
            localStorage.removeItem("accessToken")
            // Redirect to login page
            return null
        }
    } catch (error) {
        localStorage.removeItem("accessToken")
        // Redirect to login page
        return null
    }
}

export async function fetchApi(endpoint, options = {}, retry = true){

    const token = localStorage.getItem("accessToken")

    options.method = options.method || 'GET' 

    options.headers = {
        "Content-Type" : "application/json",
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}`} : {})
    }

    try {
        let response = await fetch(`${process.env.API_BASE_URL}${endpoint}`,{
            ...options,
            credentials: 'include'
        })
    
        if(response.status === 401 && retry){
            // If the user is unauthorized, refresh the access token
            const token = await refreshAccessToken()
            if(token){
                options.headers.Authorization = `Bearer ${token}`
                // Retry the request with the new token
                response = await fetchApi(endpoint, options, false)
            }
        }
    return response.json()
    } catch (error) {
        console.error("Error fetching API:", error)
    }
}

