import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home"
import Main from "../component/main"
export default function Router() {
    return (
        <Routes>
            <Route element={<Navigate to="/main" replace />} path="/" />
            <Route element={<Main></Main>} path="/main"></Route>
            <Route element={<Home></Home>} path="/home"></Route>
        </Routes>
    )
}