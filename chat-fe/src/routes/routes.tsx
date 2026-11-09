import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Home from "../pages/home"
import Main from "../component/main"
import { useEffect, useState } from "react";
export default function Router() {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    async function checkToken() {
        try {
            const res = await fetch("/auth/check", {
                method: "GET",
                credentials: "same-origin"
            });
            const data = await res.json();
            if (data.success) {
                setCheck(true);
            }
        } catch (error) {
            console.error("Lỗi khi kiểm tra token:", error);
        }
    }
    useEffect(() => {
        checkToken();

    }, []);
    return (
        <Routes>
            <Route element={check
                ? <Navigate to="/home" replace />
                : <Main />} path="/" />
            <Route element={<Main></Main>} path="/main"></Route>
            <Route element={<Home></Home>} path="/home"></Route>
        </Routes>
    )
}