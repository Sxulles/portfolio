import { motion } from "framer-motion"
import popSFX from "../assets/SFX/pop-sfx.wav"

const Command = ({ command, onCommandClick }) => {

    const sfxPlayer = () => {
        const audio = new Audio(popSFX);
        audio.play();
      };

    return (
      <motion.div
        className="command p-2 col-md"
        onClick={() => {onCommandClick(command); sfxPlayer()}}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, border: "1px solid white" }}
        transition={{ duration: 0.3 }}
      >
        {command.cmd}
      </motion.div>
    );
  };
 
export default Command;