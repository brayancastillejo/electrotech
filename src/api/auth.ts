import axios from "axios";
import { loginDTO } from "../interfaces/loginDTO";
import { registerDTO } from "../interfaces/registerDTO";

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