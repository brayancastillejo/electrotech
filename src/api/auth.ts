import axios from "axios";
import { loginDTO } from "../interfaces/loginDTO";
import { registerDTO } from "../interfaces/registerDTO";
import { tokenDTO } from "../interfaces/tokenDTO";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const login = async (loginDto:loginDTO) => {

    const response = await instance.post("/auth/login", loginDto);
    return response.data;

};

export const signup = async (registerDto:registerDTO) => {

    const response = await instance.post("/auth/register", registerDto);
    return response.data;
}

export const validateToken = async () => {

    const response = await instance.get("/auth/validate", {
        headers: {
            Authorization: `${localStorage.getItem("token")}`
        }
    });

    const tokenInfo = response.data as tokenDTO;

    return tokenInfo;
}