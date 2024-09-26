import { Route, Routes } from "react-router-dom";
import RequiredAuth from "./features/auth/RequiredAuth";
import Home from "./pages/home";
import ForgetPasswprd from "./pages/Auth/ForgetPasswd";

import RequireLayout from "./layout/RequireLayout";
import Profile from "./pages/Profile";
import DemandeConger from "./pages/Absence";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Rootstate } from "./redux/store";
import RequiredRolePages from "./features/auth/RequiredRolePage";
import HomeAdmin from "./pages/admin/HomeAdmin";
import NewPassword from "./pages/Auth/NewPassword";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/login";
import RequireNotAuth from "./features/auth/RequireNotAuth";
import LoginSU from "./pages/SuperUser/LoginSU";
import HomeEntreprise from "./pages/SuperUser/Home";
import CreateEntreprise from "./pages/SuperUser/CreateEntreprise";
import CreateUser from "./pages/admin/CreateUser";

const App = () => {
  const isDarkMode = useSelector<Rootstate>((state) => state.theme.dark);
  //manage dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Routes>
        <Route path="" element={<RequiredAuth />}>
          <Route path="" element={<RequireLayout />}>
            <Route path="/" element={<RequiredRolePages requiredRole="USER" />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/absence" element={<DemandeConger />} />
              <Route path="/" element={<Home />} />
              <Route path="/historique" element={<h1>Historique absence</h1>} />
              <Route path="/paramètre" element={<h1>Paramètre</h1>} />
            </Route>

            <Route
              path="/"
              element={<RequiredRolePages requiredRole="SUP_USER" />}
            >
              <Route path="/$uperU&er" element={<HomeEntreprise />} />
              <Route path="/create-entreprise" element={<CreateEntreprise/>} />
            </Route>

            <Route
              path="/"
              element={<RequiredRolePages requiredRole="ADMIN" />}
            >
              <Route path="/home" element={<HomeAdmin />} />
              <Route path="create-user" element={<CreateUser />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Route>

        {/* cannot Acessed if authenticated */}
        <Route path="/" element={<RequireNotAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login$uperU&er" element={<LoginSU />} />
          <Route path="/forget_pswd" element={<ForgetPasswprd />} />
          <Route path="/newPassword" element={<NewPassword />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
