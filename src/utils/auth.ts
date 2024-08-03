import { jwtDecode, JwtPayload } from "jwt-decode";
import { validateToken } from "../api/auth";

export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
}

const isValidToken = async () => {
  const data = await validateToken();
  return data.isValid;
};

interface TokenPayload extends JwtPayload {
  roles: string;
}

export const getRole = async () => {
  const token = getToken();

  if (!token) return null;

  const isValid = await isValidToken();

  if (!isValid) return null;

  const decoded = jwtDecode<TokenPayload>(token);

  return decoded.roles;
};
