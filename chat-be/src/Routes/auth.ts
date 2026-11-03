import express from "express";
import {
    login,
    loginSystem,
    myInfo,
    register,
    verifyRefreshToken,
    getAccessToken
} from "../controllers/controllers.user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", myInfo, loginSystem);
router.post("/token", verifyRefreshToken, getAccessToken);

export default router;
