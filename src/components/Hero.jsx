import shape from "../assets/img/shape.webp"
import { motion } from "framer-motion";

const Hero = () => {

    return (
        <section className="hero-section text-light py-5">
        <div className="container-fluid height-90">
          <div className="row align-items-center">
            <div className="col-md-6 ps-5 mt-5">
            <h3><span className="badge bg-secondary rounded-0 ms-1">Welcome!</span></h3>
              <h1 className="display-1 increase-font-size">Robert Seres</h1>
              <h1 className="display-3">Fullstack Developer</h1>
              <motion.a href="#about-me" whileHover={{scale: 1.2}} className="btn btn-dark btn-lg rounded-0 py-2 px-4 btn-lg mt-3">About me</motion.a>
            </div>
            <div className="col-md-6">
              <img className="img-fluid img-100" src={shape} alt=""/>
            </div>
          </div>
        </div>
      </section>
    
    )
};

export default Hero;