import express from "express";
import {
    login,
    loginSystem,
    myInfo,
    register,
    verifyRefreshToken,
    saveRefreshToken
} from "../controllers/controllers.user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", saveRefreshToken);
router.get("/me", myInfo, loginSystem);
router.post("/token", verifyRefreshToken,)

export default router;
