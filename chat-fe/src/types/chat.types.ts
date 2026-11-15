export interface MessageItem {
    id: number;
    sender: string;
    text: string;
    isMe: boolean;
    time: string;
}

export interface ConversationItem {
    id: number;
    name: string;
    isGroup: boolean;
    lastMessage: string;
    unreadCount?: number;
    messages: MessageItem[];
}

export interface UserProfile {
    userId: number;
    email: string;
    isVerified: boolean;
}

