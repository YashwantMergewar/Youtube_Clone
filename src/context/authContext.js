import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const storedToken = localStorage.getItem('token')

        if (storedToken && storedUser){
            setUser(JSON.parse(storedUser))
            setToken(storedToken)
        }
        setLoading(false)
    }, [])

    const login = (userData, userToken) => {
        setUser(userData)
        setToken(userToken)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('token', userToken)
    }

    const logout = () => {
        setUser(null)
        setToken(null)

        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }


    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout, isAuth: !!user }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}