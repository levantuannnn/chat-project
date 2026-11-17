import express from "express";
import { myInfo } from "../controllers/controllers.user.js";
import {
    getConversations,
    getConversationMessages,
    createConversation,
    getMessages
} from "../controllers/chat.controller.js";

const router = express.Router();

// Tất cả route chat đều được bảo vệ bởi middleware xác thực myInfo
router.get("/conversations", myInfo, getConversations);
router.post("/conversations", myInfo, createConversation);
router.get("/conversations/:id/messages", myInfo, getConversationMessages);
router.get("/message/:id", myInfo, getMessages)

export default router;

