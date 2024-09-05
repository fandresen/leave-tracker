import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import RequiredAuth from "./features/auth/RequiredAuth";
import Home from "./pages/home";
import ForgetPasswprd from "./pages/ForgetPasswd";

import RequireLayout from "./layout/RequireLayout";
import Profile from "./pages/Profile";
import DemandeConger from "./pages/Absence";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Rootstate } from "./redux/store";
import LoginSuperUser from "./features/super_User/login/LoginSuperUser";
import CreateEntrepriseContainer from "./features/super_User/container/CreateEntrepriseContainer";
import RequiredRolePages from "./features/auth/RequiredRolePage";
import HomeAdmin from "./pages/admin/HomeAdmin";


const App = () => {
  const isDarkMode = useSelector<Rootstate>((state)=>state.theme.dark)
  //manage dark mode 
  useEffect(() =>{
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[isDarkMode])
  
  return (
    <Routes>
      <Route path="" element={<RequiredAuth />}>
        <Route path="" element={<RequireLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/absence" element={<DemandeConger/>} />
          <Route path="/historique" element={<h1>Historique absence</h1>} />
          <Route path="/$uperU&er" element={<CreateEntrepriseContainer/>} />
          <Route path="/paramètre" element={<h1>Paramètre</h1>} />
          <Route path="/admin" element={<RequiredRolePages requiredRole="ADMIN"/>}>
            <Route path="home" element={<HomeAdmin/>}/>
          </Route>
          <Route path="*" element={ <h1>Page Not Found</h1>} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/login$uperU&er" element={<LoginSuperUser />} />
      <Route path="/forget_pswd" element={<ForgetPasswprd />} />
    </Routes>
  );
};

export default App;
