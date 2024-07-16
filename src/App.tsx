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
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/forget_pswd" element={<ForgetPasswprd />} />
    </Routes>
  );
};

export default App;
