import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import RequiredAuth from "./features/auth/RequiredAuth";
import Home from "./pages/home";
import ForgetPasswprd from "./pages/ForgetPasswprd";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RequiredAuth />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forget_pswd" element={<ForgetPasswprd />} />
    </Routes>
  );
};

export default App;
