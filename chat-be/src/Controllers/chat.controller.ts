import type { Request, Response, NextFunction } from "express";
import {
    createConversation as createConvModel,
    getUserConversations as getUserConvsModel,
    getMessages as getMessagesModel
} from "../model/model.chat.js";

export async function getConversations(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = typeof req.user === "object" && req.user !== null && "userId" in req.user
            ? Number(req.user.userId)
            : Number(req.query.userId);

        if (!userId) {
            return res.status(400).json({ success: false, message: "Thiếu userId" });
        }

        const conversations = await getUserConvsModel(userId);
        return res.status(200).json({ success: true, data: conversations });
    } catch (error) {
        next(error);
    }
}

export async function getConversationMessages(req: Request, res: Response, next: NextFunction) {
    try {
        const conversationId = Number(req.params.id);
        if (!conversationId) {
            return res.status(400).json({ success: false, message: "conversationId không hợp lệ" });
        }

        const messages = await getMessagesModel(conversationId);
        return res.status(200).json({ success: true, data: messages });
    } catch (error) {
        next(error);
    }
}

export async function createConversation(req: Request, res: Response, next: NextFunction) {
    try {
        const { memberIds, isGroup, name } = req.body;
        if (!Array.isArray(memberIds) || memberIds.length === 0) {
            return res.status(400).json({ success: false, message: "Danh sách thành viên không hợp lệ" });
        }

        const conversation = await createConvModel(memberIds, Boolean(isGroup), name);
        return res.status(201).json({ success: true, data: conversation });
    } catch (error) {
        next(error);
    }
}

