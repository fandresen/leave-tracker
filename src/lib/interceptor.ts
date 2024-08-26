import axios from "axios";
import { getAccessToken } from "./token&RoleService";


const BASE_URL = "http://localhost:3000";
const BASE_API_URL = "http://localhost:3000/api";

//hook personaliser pour les requette sans token
export const useAxiosNormal = () => {
  const axiosReq = axios.create({ baseURL: BASE_URL });
  return axiosReq;
};

//hook personaliser pour les requette avec token et role
export const useAxiosApi = () => {
  const cookies = getAccessToken()
  const axiosReq = axios.create({
   baseURL: BASE_API_URL,
    headers: {
      Authorization: `Bearer ${cookies}`,
    },
    withCredentials: true,
  });
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
