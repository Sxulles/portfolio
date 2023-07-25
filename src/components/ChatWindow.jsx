import Message from "./Message";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import answersJSON from "../assets/answers.json"

const ChatWindow = ({ command, onIsWritingChange }) => {

  const scrollToBottom = () => {
    const chatWindow = document.getElementById("chat-window");
    if (chatWindow) {
      chatWindow.scrollTo({
        top: chatWindow.scrollHeight,
        behavior: "smooth" // Itt adjuk meg a smooth görgetést
      });
    }
  };

  const introduction = "Hi! I'm Robert's chatbot, Ro-Bot. 🤖 Please choose an option from below to start a conversation. 😊";
  const [messages, setMessages] = useState([]);
  const answers = answersJSON.answers;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isWriting, setIsWriting] = useState(false)
  const [typedMessages, setTypedMessages] = useState([]);

  useEffect(() => {
    if (command && command.cmdId !== null && command.cmd !== "") {


      // bot logic
      const botResponse = answers.find(ans => ans.answerId === command.cmdId)?.answer;
      const botMessage = { id: Date.now() + 1, text: botResponse, isUserMessage: false };
      
      setMessages(prevMessages => [
        ...prevMessages,
        { id: Date.now(), text: command.cmd, isUserMessage: true },
        botMessage
      ]);
      scrollToBottom();
    } else {
      if (isInView)
      {
        // If command is empty, and chatwindow is in view, show introduction
        setMessages([{ id: Date.now(), text: introduction, isUserMessage: false }])
        scrollToBottom();
      }
    }
  }, [command, isInView]);




  useEffect(() => {
    onIsWritingChange(isWriting);
  }, [isWriting]);
  


  return (
    <div ref={ref} id="chat-window" className="chat-window container-fluid">
      
      {messages.map((message, index) => (
        <Message key={index} answer={message.text} isUserMessage={message.isUserMessage} setIsWriting={setIsWriting} />
      ))}
      {typedMessages.map((typedMessage, index) => (
        <Message key={`typed-${index}`} answer={typedMessage} isUserMessage={true} />
      ))}
    </div>
  );
};




 
export default ChatWindow;