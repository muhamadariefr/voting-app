import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Login from "./components/LogReg/Login";
import Signup from "./components/LogReg/Signup";

import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourPage from "./pages/FourPage";
import FivePage from "./pages/FivePage";
import AdminComponent from "./components/Admin/Admin";
import Users from "./components/Admin/Users";
import Order from "./components/Admin/Order";
import Report from "./components/Admin/Report";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/admin" ||
    location.pathname === "/users" ||
    location.pathname === "/order" ||
    location.pathname === "/report";
  const hideFooter =
    hideNavbar ||
    location.pathname === "/admin" ||
    location.pathname === "/users" ||
    location.pathname === "/order" ||
    location.pathname === "/report";
  return (
    <div>
      {!hideNavbar && <NavbarComponent />}

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kandidat" Component={SecondPage} />
        <Route path="/testimonial" Component={ThirdPage} />
        <Route path="/faq" Component={FourPage} />
        <Route path="/syaratketen" Component={FivePage} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/users" element={<Users />} />
        <Route path="/order" element={<Order />} />
        <Route path="/report" element={<Report />} />
      </Routes>

      {!hideFooter && <FooterComponent />}
    </div>
  );
}

export default App;
