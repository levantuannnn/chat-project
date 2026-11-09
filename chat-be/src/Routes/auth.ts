import express from "express";
import {
    checkAuth,
    login,
    loginSystem,
    logout,
    myInfo,
    register,
    verifyRefreshToken,
    getAccessToken
} from "../controllers/controllers.user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", myInfo, loginSystem);
router.get("/check", myInfo, checkAuth)
router.post("/token", verifyRefreshToken, getAccessToken);

export default router;
