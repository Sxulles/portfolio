import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import StatusIndicator from "./StatusIndicator";
import shape4 from "../assets/img/shape4.webp"

const ContactSection = () => {

    const apiKey = import.meta.env.VITE_ABSTRACT_API_KEY;
    const apiBaseURL = import.meta.env.VITE_ABSTRACT_API_BASE_URL;

    const [showSuccesStatus, setShowSuccesStatus] = useState(false)
    const [senderData, setSenderData] = useState({
        email: "", 
        subject: "",
        message: ""
    })

    const [isInteracted, setIsInteracted] = useState(false);
    const [isInvalidInput, setIsInvalidInput] = useState({
        emailField: false, 
        subjectField: false,
        messageField: false
      });

    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSenderData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        if (!isInteracted) {
          setIsInteracted(true);
        }
      };


      useEffect(() => {
        validateInputs(senderData);
      }, [senderData]);
    
    const [isLoading, setIsLoading] = useState(false)

    
    const apiURL = `${apiBaseURL}?api_key=${apiKey}`
    const sendEmailValidationRequest = async (email) => {
        try {
            const response = await fetch(apiURL + '&email=' + email);
            const data = await response.json();
  
            if (data.is_smtp_valid.value && data.is_valid_format) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    const validateInputs = (data) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const invalidInputs = {};

        invalidInputs.emailField = (!data.email.match(emailPattern)) ? true : false;
        invalidInputs.subjectField = (!(data.subject.length > 0)) ? true : false;
        invalidInputs.messageField = (!(data.message.length > 0)) ? true : false;
    
        setIsInvalidInput((prevIsInvalidInput) => ({
          ...prevIsInvalidInput,
          ...invalidInputs,
        }));
    
        return Object.keys(invalidInputs).every(key => !invalidInputs[key]);
      };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
      
        const templateParams = {
          subject: senderData.subject,
          from_name: senderData.email,
          message: senderData.message,
        };
      
        const inputsAreValid = validateInputs(senderData);
      
        try {
          const isValidEmailAddress = await sendEmailValidationRequest(senderData.email);
          if (inputsAreValid && isValidEmailAddress) {
            await emailjs.send('service_hv625ia', 'template_ms0v38g', templateParams, 'nNV9tDLgUuhMprg4V');
            setShowSuccesStatus(true)
          } 
        } catch (error) {
        }
      
        setIsLoading(false);
      };



    return (
        <>
      {showSuccesStatus && showSuccesStatus ? <StatusIndicator showWindow={setShowSuccesStatus} status={null}/> : null}
      {isLoading && isLoading ? <StatusIndicator showWindow={null} status={"loading"}/> : null}
      <div id="contact" className="container-fluid contact-section d-flex">
      <img className="img-fluid img-100 cs-bg" src={shape4} alt=""/>
        <div className="container section-content text-white">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-12">
              <div className="form h-100 bg-dark-transparent">
                <h3 className="text-white">Contact</h3>
                <form className="mb-5" onSubmit={sendEmail} id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">Email address *</label>
                      <input onChange={handleInputChange} type="email" className="form-control" name="email" id="email" placeholder="example@gmail.com" />
                      {isInvalidInput.emailField && (isInvalidInput.emailField && isInteracted) ? <p className="error-message mt-2">Invalid email, or empty field.</p> : null}
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">Subject *</label>
                      <input onChange={handleInputChange} type="text" className="form-control" name="subject" id="subject" placeholder="Example" />
                      {isInvalidInput.subjectField && (isInvalidInput.subjectField && isInteracted) ? <p className="error-message mt-2">Invalid subject, or empty field.</p> : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="message" className="col-form-label">Message *</label>
                      <textarea onChange={handleInputChange} className="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
                      {isInvalidInput.messageField && (isInvalidInput.messageField && isInteracted) ? <p className="error-message mt-2">Invalid message, or empty field.</p> : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <motion.input readOnly type="submit" value={"Send Message"} whileHover={{scale: 1.1}} className="btn btn-dark rounded-0 py-2 px-4" />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default ContactSection;