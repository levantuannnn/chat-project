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
import { sendOtp, verifyOtpController } from "../controllers/mail.controllers.js";

const router = express.Router();

router.post("/registers", register);
router.post("/logins", login);
router.post("/logouts", logout);
router.post("/send-otps", sendOtp);
router.post("/verify-otps", verifyOtpController);
router.get("/mes", myInfo, loginSystem);
router.get("/checks", myInfo, checkAuth);
router.post("/tokens", verifyRefreshToken, getAccessToken);
export default router;
