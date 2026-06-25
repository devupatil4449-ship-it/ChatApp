import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

function ChatWindow() {
  return (
    <div>
      <h3>Vishakha</h3>

      <MessageBubble
        text="Hi! How are you?"
        isSent={false}
      />

      <MessageBubble
        text="I'm doing great."
        isSent={true}
      />

      <MessageBubble
        text="Working on React."
        isSent={false}
      />

      <MessageInput />
    </div>
  );
}

export default ChatWindow;