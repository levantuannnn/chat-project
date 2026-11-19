import type { ConversationItem, MessageItem, ReactionItem } from "../types/chat.types.js";
import { initialConversations } from "../data/mockChat.js";

export interface ChatState {
    currentUserId: number;
    userEmail: string;
    isVerified: boolean;
    isConnected: boolean;
    typingUser: string | null;
    searchTerm: string;
    isMobileSidebarOpen: boolean;

    // Modal tạo cuộc trò chuyện
    showNewChatModal: boolean;
    newChatName: string;
    isNewGroup: boolean;

    // Danh sách & phòng chat hiện tại
    conversations: ConversationItem[];
    activeConversationId: number;
    inputMessage: string;
}

export type ChatAction =
    | {
          type: "SET_USER_PROFILE";
          payload: {
              currentUserId?: number;
              userEmail?: string;
              isVerified?: boolean;
          };
      }
    | { type: "SET_CONNECTED"; payload: boolean }
    | { type: "SET_TYPING_USER"; payload: string | null }
    | { type: "SET_SEARCH_TERM"; payload: string }
    | { type: "SET_MOBILE_SIDEBAR"; payload: boolean | ((prev: boolean) => boolean) }
    | { type: "SET_SHOW_NEW_CHAT_MODAL"; payload: boolean }
    | { type: "SET_NEW_CHAT_NAME"; payload: string }
    | { type: "SET_IS_NEW_GROUP"; payload: boolean }
    | { type: "SET_INPUT_MESSAGE"; payload: string }
    | { type: "APPEND_INPUT_MESSAGE"; payload: string }
    | { type: "SELECT_CONVERSATION"; payload: number }
    | {
          type: "RECEIVE_MESSAGE";
          payload: {
              conversationId: number;
              message: MessageItem;
          };
      }
    | {
          type: "UPDATE_REACTIONS";
          payload: {
              conversationId: number;
              messageId: number;
              reactions: ReactionItem[];
          };
      }
    | {
          type: "SET_ROOM_MESSAGES";
          payload: {
              conversationId: number;
              messages: MessageItem[];
          };
      }
    | { type: "CREATE_CONVERSATION"; payload: ConversationItem }
    | {
          type: "ADD_FALLBACK_MESSAGE";
          payload: {
              conversationId: number;
              message: MessageItem;
          };
      };

export const initialChatState: ChatState = {
    currentUserId: 1,
    userEmail: "user@example.com",
    isVerified: false,
    isConnected: false,
    typingUser: null,
    searchTerm: "",
    isMobileSidebarOpen: false,

    showNewChatModal: false,
    newChatName: "",
    isNewGroup: false,

    conversations: initialConversations,
    activeConversationId: 1,
    inputMessage: ""
};

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
    switch (action.type) {
        case "SET_USER_PROFILE":
            return {
                ...state,
                currentUserId: action.payload.currentUserId ?? state.currentUserId,
                userEmail: action.payload.userEmail ?? state.userEmail,
                isVerified: action.payload.isVerified ?? state.isVerified
            };

        case "SET_CONNECTED":
            return {
                ...state,
                isConnected: action.payload
            };

        case "SET_TYPING_USER":
            return {
                ...state,
                typingUser: action.payload
            };

        case "SET_SEARCH_TERM":
            return {
                ...state,
                searchTerm: action.payload
            };

        case "SET_MOBILE_SIDEBAR": {
            const nextVal =
                typeof action.payload === "function"
                    ? action.payload(state.isMobileSidebarOpen)
                    : action.payload;
            return {
                ...state,
                isMobileSidebarOpen: nextVal
            };
        }

        case "SET_SHOW_NEW_CHAT_MODAL":
            return {
                ...state,
                showNewChatModal: action.payload
            };

        case "SET_NEW_CHAT_NAME":
            return {
                ...state,
                newChatName: action.payload
            };

        case "SET_IS_NEW_GROUP":
            return {
                ...state,
                isNewGroup: action.payload
            };

        case "SET_INPUT_MESSAGE":
            return {
                ...state,
                inputMessage: action.payload
            };

        case "APPEND_INPUT_MESSAGE":
            return {
                ...state,
                inputMessage: state.inputMessage + action.payload
            };

        case "SELECT_CONVERSATION":
            return {
                ...state,
                activeConversationId: action.payload,
                isMobileSidebarOpen: false,
                typingUser: null
            };

        case "RECEIVE_MESSAGE": {
            const { conversationId, message } = action.payload;
            return {
                ...state,
                conversations: state.conversations.map(conv => {
                    if (conv.id === conversationId) {
                        if (conv.messages.some(m => m.id === message.id)) return conv;
                        return {
                            ...conv,
                            lastMessage: message.text,
                            messages: [...conv.messages, message]
                        };
                    }
                    return conv;
                })
            };
        }

        case "UPDATE_REACTIONS": {
            const { conversationId, messageId, reactions } = action.payload;
            return {
                ...state,
                conversations: state.conversations.map(conv => {
                    if (conv.id === conversationId) {
                        return {
                            ...conv,
                            messages: conv.messages.map(m =>
                                m.id === messageId ? { ...m, reactions } : m
                            )
                        };
                    }
                    return conv;
                })
            };
        }

        case "SET_ROOM_MESSAGES": {
            const { conversationId, messages } = action.payload;
            return {
                ...state,
                conversations: state.conversations.map(conv => {
                    if (conv.id === conversationId) {
                        return {
                            ...conv,
                            lastMessage:
                                messages[messages.length - 1]?.text || conv.lastMessage,
                            messages
                        };
                    }
                    return conv;
                })
            };
        }

        case "CREATE_CONVERSATION":
            return {
                ...state,
                conversations: [action.payload, ...state.conversations],
                activeConversationId: action.payload.id,
                newChatName: "",
                isNewGroup: false,
                showNewChatModal: false,
                isMobileSidebarOpen: false,
                typingUser: null
            };

        case "ADD_FALLBACK_MESSAGE": {
            const { conversationId, message } = action.payload;
            return {
                ...state,
                conversations: state.conversations.map(conv =>
                    conv.id === conversationId
                        ? {
                              ...conv,
                              lastMessage: message.text,
                              messages: [...conv.messages, message]
                          }
                        : conv
                )
            };
        }

        default:
            return state;
    }
}

