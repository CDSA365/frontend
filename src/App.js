import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enroll from "./views/enroll";
import Home from "./views/home";
import Login from "./views/login";
import AuthLayout from "./views/auth-page";
import PrivateRoutes from "./components/privateRoutes";
import Profile from "./views/profile";
import Landing from "./views/landing-page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Landing />}>
                    <Route exec path="/" element={<Home />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route exec path="/enroll" element={<Enroll />} />
                    <Route exec path="/login" element={<Login />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route exec path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
