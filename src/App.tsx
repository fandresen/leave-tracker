import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import RequiredAuth from "./features/auth/RequiredAuth";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RequiredAuth />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
