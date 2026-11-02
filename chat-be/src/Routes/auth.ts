import express from "express";
import {
    login,
    loginSystem,
    midelWare,
    register,
    saveRefreshToken
} from "../controllers/controllers.user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", saveRefreshToken);
router.get("/me", midelWare, loginSystem);

export default router;
