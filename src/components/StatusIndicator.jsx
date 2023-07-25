import succesIcon from "../assets/icons/success.svg"
import shape2 from "../assets/img/shape2.webp"
import { motion } from "framer-motion"

const StatusIndicator = ({ showWindow, status }) => {
    const text = '...';
    return (
        status === "loading" ?
            (<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
                <div className="loading-bg px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }} className="spinner-img" src={shape2} alt="loading..." />
                    <h1 className="mt-5" style={{ display: 'inline-block' }}>
                        Validating
                        {text.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                style={{ display: 'inline-block' }}
                                initial={{ y: 0 }}
                                animate={{
                                    y: [0, -7, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    delay: index * 0.1,
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </div>
            </div>)
            :
            (<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
                <div className="loading-bg px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="success-icon mt-5" src={succesIcon} alt="success" />
                    <h1 className="mt-5">Email sent!</h1>
                    <motion.button onClick={() => showWindow(false)} whileHover={{scale: 1.1}} className="btn btn-success mt-2 mb-4">Ok</motion.button>
                </div>
            </div>)
    );
}

export default StatusIndicator;