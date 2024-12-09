import axios from "axios";
import {
  clearToken,
  getAccessToken,
  setAccessToken,
} from "./token&RoleService";

const BASE_URL = "http://192.168.1.249:8085/api";

//hook personaliser pour les requette sans token
export const useAxiosNormal = () => {
  const axiosReq = axios.create({ baseURL: BASE_URL });
  return axiosReq;
};

//Use when aking for accessToken
const axiosRefresh = axios.create({ baseURL: BASE_URL, withCredentials: true });

//hook personaliser pour les requette avec token
export const useAxiosWithToken = () => {
  const cookies = getAccessToken();
  const axiosReq = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${cookies}`,
    },
    withCredentials: true,
  });

  axiosReq.interceptors.response.use(
    response => response,
    async (error) => {
      if (error.response.status === 401) {
        // demand access token
        const accessToken = (await axiosRefresh.get(BASE_URL + "/access-token"))
          .data.accessToken;
        if (accessToken) {
          // save access token to local storage
          setAccessToken(accessToken);
          error.config.headers['Authorization'] = `Bearer ${accessToken}`;
          return axiosReq.request(error.config);  // Renvoie la requête échouée avec le nouveau token
        }
      }
      else if (error.response.status === 500 || error.response.status === 403){
        clearToken();
      }
    }

  );

  return axiosReq;
};
