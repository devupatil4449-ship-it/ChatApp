function MessageBubble({ text, isSent }) {
  return (
    <div>
      {isSent ? "Sent: " : "Received: "}
      {text}
    </div>
  );
}

export default MessageBubble;