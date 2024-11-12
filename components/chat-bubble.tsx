import React from "react";

interface ChatBubbleProps {
  message: string;
  isSender: boolean;
  userName: string;
  isRead?: boolean;
  isDelivered?: boolean;
  messageStatus?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isSender,
  userName,
  messageStatus = "sent",
}) => {
  const bubbleAlignment = isSender ? "justify-end" : "justify-start";
  const bubbleColor = isSender ? "bg-blue-500" : "dark:bg-gray-200 bg-gray-600";
  const textColor = isSender
    ? "text-white"
    : "dark:text-gray-800 text-gray-100";

  const MessageStatusIcon = () => {
    switch (messageStatus) {
      case "sent":
        return <span className="text-gray-400">✓</span>;
      case "delivered":
        return <span className="text-gray-400">✓✓</span>;
      case "read":
        return <span className="text-blue-400">✓✓</span>;
      case "error":
        return <span className="text-red-500">!</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`flex ${bubbleAlignment} mb-4 group`}>
      <div className="flex items-end max-w-[70%]">
        <div className="flex flex-col">
          {!isSender && (
            <span className="text-xs text-gray-500 ml-2 mb-1">{userName}</span>
          )}

          <div
            className={`
              relative
              p-4
              rounded-2xl
              ${bubbleColor}
              ${textColor}
              ${isSender ? "rounded-tr-sm" : "rounded-tl-sm"}
              shadow-sm
              hover:shadow-md
              transition-shadow
              duration-200
            `}
          >
            <p className="break-words whitespace-pre-wrap">{message}</p>

            <div
              className={`
              flex
              items-center
              gap-1
              absolute
              bottom-1
              ${isSender ? "right-2" : "left-2"}
              opacity-70
              text-xs
            `}
            >
              {isSender && <MessageStatusIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
