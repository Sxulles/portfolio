import Command from "./Command";
import CommandPlaceholder from "./CommandPlaceholder";

const CommandBox = ({ commands, onCommandClick }) => {
    return (
      <div className="container flex-row justify-content-center mb-4" id="commands">
        {commands && commands !== null ? 
          commands.map((command) => (
            <Command command={command} key={command.cmdId} onCommandClick={onCommandClick} />
          )) : 
            <CommandPlaceholder/>
        }
      </div>
    );
  };
 
export default CommandBox;