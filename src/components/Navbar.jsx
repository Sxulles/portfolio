import srLogo from "../assets/icons/sr-logo.svg"
import chatIcon from "../assets/icons/chat-icon.svg"
import gridIcon from "../assets/icons/grid-icon.svg"
import nameCardIcon from "../assets/icons/name-card-icon.svg"
import { motion } from "framer-motion"

const Navbar = () => {

    return (
        <header>
            <div className="px-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <span className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <motion.img className="logo bi text-white" width="50" height="50" id="sr" src={srLogo} alt="sr-logo"
                            
                            whileHover={{ scale: 1.5, background: "linear-gradient(to right, rgba(143, 46, 255, 1), rgba(255, 46, 46, 1)",}}
                            whileTap={{scale: 1.2}}
                            />
                        </span>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="#chat-bot" className="nav-link text-white">
                                <img className="bi d-block mx-auto mb-1"  width="24" height="24" src={chatIcon} alt="chat-icon"/>
                                    Chat
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                <img className="bi d-block mx-auto mb-1"  width="24" height="24" src={gridIcon} alt="grid-icon"/>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="nav-link text-white">
                                <img className="bi d-block mx-auto mb-1"  width="24" height="24" src={nameCardIcon} alt="grid-icon"/>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;