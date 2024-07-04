import axios from "axios";
import { getAccessToken } from "./token&RoleService";

const BASE_URL = "http://192.168.88.9:3000";

//hook personaliser pour les requette sans token
export const useAxiosNormal = () => {
  const axiosReq = axios.create({ baseURL: BASE_URL });
  return axiosReq;
};

//hook personaliser pour les requette avec token
export const useAxiosWithToken = () => {
 const axiosReq = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${getAccessToken}`,
    },
    withCredentials: true,
  });
  return axiosReq
};
