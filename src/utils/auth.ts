import { jwtDecode, JwtPayload } from "jwt-decode";
import { validateToken } from "../api/auth";

export const saveToken = (token:string) => {
    localStorage.setItem("token", token);
}

export const getToken = () => {
    return localStorage.getItem("token");
}

const isValidToken = async () => {
    const data = await validateToken();
    return data.isValid;
}

interface TokenPayload extends JwtPayload {
    roles: string;
}

export const getRole = () => {

    const token = getToken();

    if (!token) return null;

    
    isValidToken().then(isValid => {

        if (!isValid) return null;

        const decoded = jwtDecode<TokenPayload>(token);

        return decoded.roles;
        
    }) 

}