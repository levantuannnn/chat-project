import useChat from "../hooks/useChat.js";
import ChatNavbar from "../component/chat/ChatNavbar.js";
import ChatSidebar from "../component/chat/ChatSidebar.js";
import ChatMessageList from "../component/chat/ChatMessageList.js";
import ChatInput from "../component/chat/ChatInput.js";
import CreateChatModal from "../component/chat/CreateChatModal.js";

export default function Home() {
    const {
        userEmail,
        isVerified,
        isConnected,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        conversations,
        activeConversation,
        searchTerm,
        setSearchTerm,
        typingUser,
        inputMessage,
        messagesEndRef,
        showNewChatModal,
        setShowNewChatModal,
        newChatName,
        setNewChatName,
        isNewGroup,
        setIsNewGroup,
        handleSelectConversation,
        handleInputChange,
        handleSendMessage,
        handleCreateConversation,
        handleLogout
    } = useChat();

    return (
        <div className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden font-sans text-left">
            {/* 1. Header trên cùng */}
            <ChatNavbar
                userEmail={userEmail}
                isVerified={isVerified}
                isConnected={isConnected}
                onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
                onLogout={handleLogout}
            />

            {/* 2. Khu vực làm việc Chat */}
            <div className="flex-1 flex overflow-hidden relative">
                {/* 2.1 Cột danh sách phòng chat bên trái */}
                <ChatSidebar
                    conversations={conversations}
                    activeConversationId={activeConversation.id}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onSelectConversation={handleSelectConversation}
                    onOpenNewChatModal={() => setShowNewChatModal(true)}
                    isMobileSidebarOpen={isMobileSidebarOpen}
                    onCloseMobileSidebar={() => setIsMobileSidebarOpen(false)}
                />

                {/* 2.2 Khung nội dung chat chính */}
                <div className="flex-1 flex flex-col bg-slate-50/50 min-w-0">
                    <ChatMessageList
                        messages={activeConversation.messages}
                        activeConversationName={activeConversation.name}
                        isGroup={activeConversation.isGroup}
                        typingUser={typingUser}
                        messagesEndRef={messagesEndRef}
                    />

                    <ChatInput
                        inputMessage={inputMessage}
                        activeConversationName={activeConversation.name}
                        onInputChange={handleInputChange}
                        onSendMessage={handleSendMessage}
                    />
                </div>
            </div>

            {/* 3. Modal tạo phòng chat mới */}
            <CreateChatModal
                isOpen={showNewChatModal}
                onClose={() => setShowNewChatModal(false)}
                newChatName={newChatName}
                onNameChange={setNewChatName}
                isNewGroup={isNewGroup}
                onGroupChange={setIsNewGroup}
                onSubmit={handleCreateConversation}
            />
        </div>
    );
}
