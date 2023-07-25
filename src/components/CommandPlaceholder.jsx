import { motion } from "framer-motion"

const CommandPlaceholder = () => {
    return (
        <motion.div
        className="command p-2 cursor-auto"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Typing...
      </motion.div>
    );
}
 
export default CommandPlaceholder;