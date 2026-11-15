import express from "express";
import { myInfo } from "../controllers/controllers.user.js";
import {
    getConversations,
    getConversationMessages,
    createConversation
} from "../controllers/chat.controller.js";

const router = express.Router();

// Tất cả route chat đều được bảo vệ bởi middleware xác thực myInfo
router.get("/conversations", myInfo, getConversations);
router.post("/conversations", myInfo, createConversation);
router.get("/conversations/:id/messages", myInfo, getConversationMessages);

export default router;

