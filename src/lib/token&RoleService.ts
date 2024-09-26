import Cookies from "js-cookie";


const setRole = (token: string) =>{
  const role = JSON.parse(atob(token.split(".")[1])).role; 
  Cookies.set("role", role);
}

export const getAccessToken = () => {
  return Cookies.get("accessToken") || "";
};

export const setAccessToken = (token: string) => {
  Cookies.set("accessToken", token);
  setRole(token)
};

export const setRoleSU = (token:string) => {
  const role = JSON.parse(atob(token.split(".")[1])).role[0].authority; 
  Cookies.set("role", role);
}

export const clearToken = () => {
  Cookies.remove("accessToken");
  Cookies.remove("role");
};

export const getRole = ():string=> {
  return Cookies.get("role") || ""
}