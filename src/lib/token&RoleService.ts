import Cookies from "js-cookie";


const setRole = (token: string) =>{
  const role = JSON.parse(atob(token.split(".")[1])).role; 
  Cookies.set("role", role);
}

const setUserName =(token:string)=>{
  const userName = JSON.parse(atob(token.split(".")[1])).userName; 
  Cookies.set("user-name", userName);
}

export const getAccessToken = () => {
  return Cookies.get("accessToken") || "";
};

export const setAccessToken = (token: string) => {
  Cookies.set("accessToken", token);
  setRole(token);
  setUserName(token);
};

export const setRoleSU = (token:string) => {
  const role = JSON.parse(atob(token.split(".")[1])).role[0].authority; 
  Cookies.set("role", role);
}

export const clearToken = () => {
  Cookies.remove("accessToken");
  Cookies.remove("role");
  Cookies.remove("user-name");
};

export const getRole = ():string=> {
  return Cookies.get("role") || ""
}

export const getUserName = ():string=> {
  return Cookies.get("user-name") || ""
}