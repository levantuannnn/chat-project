import express from "express";
import { myInfo } from "../controllers/controllers.user.js";
import {
    getConversations,
    getConversationMessages,
    createConversation,
    getMessages,
    addMessage
} from "../controllers/chat.controller.js";

const router = express.Router();

// Tất cả route chat đều được bảo vệ bởi middleware xác thực myInfo
router.get("/conversations", myInfo, getConversations);
router.post("/conversations", myInfo, createConversation);
router.get("/conversations/:id/messages", myInfo, getConversationMessages);
router.get("/conversations/:id/messages", myInfo, getMessages)
router.post("/conversations/:id/messages", myInfo, addMessage)
export default router;

