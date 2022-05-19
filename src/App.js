import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enroll from "./views/enroll";
import Home from "./views/home";
import Login from "./views/login";
import AuthLayout from "./views/auth-page";
import PrivateRoutes from "./components/privateRoutes";
import Profile from "./views/profile";
import Landing from "./views/landing-page";
import HomeV2 from "./views/home-v2";
import RequestADemo from "./views/request-a-demo";
import TermsAndCondition from "./views/terms-and-condition";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Landing />}>
                    <Route exec path="/" element={<HomeV2 />} />
                    <Route exec path="/v1" element={<Home />} />
                    <Route
                        exec
                        path="/request-a-demo"
                        element={<RequestADemo />}
                    />
                    <Route
                        exec
                        path="/terms-and-condition"
                        element={<TermsAndCondition />}
                    />
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
