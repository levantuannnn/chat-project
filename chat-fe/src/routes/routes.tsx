import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home"
import Main from "../component/main"
import { useEffect, useState } from "react";

function ProtectedHome() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        async function checkToken() {
            try {
                const res = await fetch("/auth/check", {
                    method: "GET",
                    credentials: "same-origin"
                });
                const data = await res.json();
                setIsAuthenticated(res.ok && data.success === true);
            } catch (error) {
                console.error("Lỗi khi kiểm tra đăng nhập:", error);
                setIsAuthenticated(false);
            }
        }

        checkToken();
    }, []);

    if (isAuthenticated === null) {
        return <p>Đang kiểm tra đăng nhập...</p>;
    }

    return isAuthenticated ? <Home /> : <Navigate to="/main" replace />;
}

export default function Router() {
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
            <Route element={<ProtectedHome />} path="/home"></Route>
        </Routes>
    )
}