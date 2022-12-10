import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { FiMail } from "react-icons/fi";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { Typewriter } from 'react-simple-typewriter';

export const Contact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()
    // console.log(e.target.user_name.value)
    // emailjs
    //   .sendForm(
    //     "service_5h90sgm",
    //     "template_u1tdmba",
    //     form.current,
    //     "hXcQ_GBwksMfhF8mb"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
      className="contact_container"
      id="contact"
    >
      <div className="contact_content">
        <div className="contact_heading">
          <h2>
            Con<span>tact</span><span></span>
          </h2>
        </div>

        <div className="bothbox">
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="50px">
            <Box>
              <div className="contact_image" style={{ padding: "80px 0 0 0" }}>
                <img
                  src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                  alt="Contact"
                />
              </div>
            </Box>
            <Box>
              <div className="input_box">
                <div className="contact_icon">
                  <SimpleGrid columns={[1, 2, 2, 2]} spacing="20px">
                    <Box className="icon_box">
                      <a
                  href="https://www.linkedin.com/in/akshay-kadu-847311193/"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon1">
                          <FaLinkedin />
                          <h3>LinkedIn</h3>
                        </div>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="https://github.com/akshaykadu24"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon2">
                          <FaGithub />
                          <h3>GitHub</h3>
                        </div>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="mailto:akshaykadu24@gmail.com"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon3">
                          <FiMail />
                          <h3>Gmail</h3>
                        </div>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="https://wa.me/9579550881"
                        rel="noopener norefferer"
                        target="_blank"
                      
                      >
                        <div className="icon" id="icon5">
                        <AiOutlineWhatsApp/>
                          <h3>WhatsApp</h3>
                        </div>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="/"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon4">
                          <BiPhoneCall />
                          <h3>9579550881</h3>
                        </div>
                      </a>
                    </Box>
                  </SimpleGrid>
                </div>

                <div className="contact_information">
                  <form ref={form} onSubmit={sendEmail}>
                    <div>
                      <input
                        required={true}
                        name="user_name"
                        className="input_tag"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input
                        required={true}
                        name="user_email"
                        className="input_tag"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        required={true}
                        className="input_tag"
                        type="number"
                        placeholder="Number"
                      />
                    </div>
                    <div className="input_message">
                      <textarea
                        required={true}
                        name="message"
                        className="input_tag_text_message"
                        type="text"
                        placeholder="Your Message"
                      />
                    </div>
                    <div>
                      <button type="submit" className="input_btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
      <br/>
      <div className="footer" style={{textAlign:"center" }}>
            <span style={{fontSize:'20px',  color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Made with 💗 by Akshay kadu']}
            loop={5000000000}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
        </div>
    </div>
  );
};
