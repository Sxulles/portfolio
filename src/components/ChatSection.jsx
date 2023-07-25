import CommandBox from "./CommandBox";
import ChatWindow from "./ChatWindow";
import { useState } from "react";
import commandsJSON from "../assets/commands.json"

const ChatSection = () => {

    const initialCommands = commandsJSON.initialCommands;

    const [allCommand, setAllCommand] = useState(initialCommands);
    const [command, setCommand] = useState({ cmdId: null, cmd: "" });
  
    const handleCommandClick = (clickedCommand) => {
      // Remove the clicked command from the allCommand array
      const updatedCommands = allCommand.filter(
        (command) => command.cmdId !== clickedCommand.cmdId
      );
  
      setAllCommand(updatedCommands);
      setCommand(clickedCommand);
    };

    // Define a state to store isWriting value received from ChatWindow
  const [isWriting, setIsWriting] = useState(false);

  // Function to update isWriting in the ChatSection
  const handleIsWritingChange = (newIsWriting) => {
    setIsWriting(newIsWriting);
  };


    return (
      <section className="chatbot container-fluid py-5" id="chat-bot">
        <div className="chatbot-header container-fluid">
          <h2 className="display-4">Robert's Chatbot</h2>
          <p>Ro-Bot</p>
        </div>
        <ChatWindow command={command} onIsWritingChange={handleIsWritingChange} />
        <CommandBox commands={isWriting ? null : allCommand.slice(0, 3)} onCommandClick={handleCommandClick} />
      </section>
    );
  };
 
export default ChatSection;