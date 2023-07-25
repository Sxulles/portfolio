import shape2 from "../assets/img/shape2.webp"

const AboutMeSection = () => {
    return (
        <section id="about-me" className="about-me-section bg-dark text-light">
            <div className="container-fluid p-5 col1-as-bg">
                <div className="row align-items-center">
                <div className="col-md-6 order-md-1">
                        <img src={shape2} alt="about-me-bg.png" className="about-me-bg img-fluid" />
                    </div>
                    <div className="col-md-6 introduction-text order-md-2">
                        <h2 className="display-4 mb-5">About Me</h2>
                        <p className="lead">
                            I'm Róbert Seres, a dedicated junior developer from Hungary with expertise in various languages and technologies.
                        </p>
                        <p className="lead">I am passionate about creative and efficient web development, and with dedication and enthusiasm, I strive to deliver the best solutions that offer user-friendly and innovative experiences. I have hands-on experience with the MERN stack, JS ES6, CSS, C#, .NET, and various other popular technologies. I am always eager to take on new challenges and continuously learn.</p>
                        <p className="lead">I value clean and well-structured code, as well as an agile development process. My goal is to contribute to exciting projects and teams, bringing my skills and commitment to successfully tackle any obstacles that come my way</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;