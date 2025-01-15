import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        try {
            const res = await axios.post(
                "http://localhost:8800/api/auth/login",
                inputs,
                { withCredentials: true }
            );
    
            // Update the local state with user data
            setCurrentUser(res.data);
    
            // Optional: Save the token locally if needed
            localStorage.setItem("token", res.data.token);
        } catch (err) {
            console.error("Login Error:", err.response?.data || err.message);
            throw err;
        }
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/auth/me", { withCredentials: true });
                setCurrentUser(res.data);
            } catch (err) {
                setCurrentUser(null);
            }
        };
    
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};