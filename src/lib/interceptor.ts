import axios from "axios";
import { getAccessToken } from "./token&RoleService";

const BASE_URL = "http://192.168.1.87:3000";
const BASE_URL_JAVA = "http://localhost:8080/firstapi-1.0/api";
//hook personaliser pour les requette sans token
export const useAxiosNormal = () => {
  const axiosReq = axios.create({ baseURL: BASE_URL });
  return axiosReq;
};

export const useAxiosJava = () => {
  const axiosReq = axios.create({ baseURL: BASE_URL_JAVA });
  return axiosReq;
};

//hook personaliser pour les requette avec token
export const useAxiosWithToken = () => {

  const cookies = getAccessToken()
 const axiosReq = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${cookies}`,
    },
    withCredentials: true,
  });
  return axiosReq
};
