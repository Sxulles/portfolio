import aiIcon from "../assets/icons/ai.svg"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react";

const Message = ({ answer, isUserMessage, setIsWriting }) => {
  const [typedAnswer, setTypedAnswer] = useState("");
  const typedText = useRef(typedAnswer);
  const typingTimer = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const typing = () => {
      if (currentIndex.current < answer.length) {
        typedText.current = typedText.current + answer.charAt(currentIndex.current);
        setTypedAnswer(typedText.current);
        currentIndex.current++;
        typingTimer.current = setTimeout(typing, 50);
      } else {
        setIsWriting(false);
      }
    };

    if (!isUserMessage) {
      setIsWriting(true);
      typedText.current = "";
      currentIndex.current = 0;
      typing();
    }

    return () => {
      clearTimeout(typingTimer.current);
    };
  }, [answer]);

  return (
    !isUserMessage ? (
      <motion.div
        className="d-flex flex-row justify-content-start mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img className="chat-bot-logo" width="60" height="60" src={aiIcon} alt="chat.bot" />
        <div className="p-3 ms-3 message-box">
          <p className="small mb-0">{typedAnswer}</p>
        </div>
      </motion.div>
    ) : (
      <motion.div
        className="d-flex flex-row justify-content-end mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="p-3 ms-3 user message-box">
          <p className="small mb-0">{answer}</p>
        </div>
      </motion.div>
    )
  );
};
  
export default Message;