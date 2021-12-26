import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./hoc/ProtectedRoute/Index";
import RedirectIfAuth from "./hoc/RedirectIfAuth/Index";

import urls from "./urls.json";

// components
import Header from "./components/Header/Index";

// pages
import Home from "./containers/Home/Index";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import ForgotPassword from "./containers/Auth/ForgotPassword";
import Footer from "./components/Footer/Index";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={urls.home.path}
          element={<ProtectedRoute children={<Home />} />}
        />
        <Route
          path={urls.signup.path}
          element={<RedirectIfAuth children={<Signup />} />}
        />
        <Route
          path={urls.forgotPassword.path}
          element={<RedirectIfAuth children={<ForgotPassword />} />}
        />
        <Route
          path={urls.login.path}
          element={<RedirectIfAuth children={<Login />} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
