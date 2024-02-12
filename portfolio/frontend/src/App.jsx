
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

import AuthLyout from "./layouts/AuthLyout.jsx";
import GuestLyout from "./layouts/GuestLyout.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import ResetPassword from "./pages/Auth/ResetPassword.jsx";



function App() {

    return (
        <div className="bg-slate-100 min-h-screen">
                <Routes>

                    <Route element={<AuthLyout/>}>

                    <Route path="/" element={<Home />} />

                    </Route>

                    <Route element={<GuestLyout />} >

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />}  />
                    <Route path="/password-reset/:token" element={<ResetPassword/>} />

                    </Route>
                </Routes>
        </div>
    );
}

export default App;
