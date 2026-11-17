export interface ReactionItem {
    id?: number;
    userId: number;
    emoji: string;
    user?: {
        id: number;
        name?: string | null;
        email?: string;
        avatar?: string | null;
    };
}

export interface MessageItem {
    id: number;
    sender: string;
    text: string;
    isMe: boolean;
    time: string;
    reactions?: ReactionItem[];
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

