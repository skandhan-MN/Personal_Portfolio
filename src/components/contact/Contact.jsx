import React from "react"
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address  from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] =useState(false)
  const theme = useContext(ThemeContext);
  const darkMode =theme.state.darkMode;
  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm("service_27qavgx", "template_zc1i6ub", formRef.current, "L9SziyHDzulCm_Ild")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wraper">
          <div className="c-left">
              <h1 className="c-title">lets discuss your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img 
                        src={Phone}
                        alt="" 
                        className="c-icon"
                         />
                         +91 7702293130
                  </div>
                  <div className="c-info-item">
                      <img 
                        src={Email}
                        alt="" 
                        className="c-icon"
                         />
                         skandhan.natarajan@gmail.com
                  </div>
                  <div className="c-info-item">
                      <img 
                        src={Address}
                        alt="" 
                        className="c-icon"
                         />
                         Plot NO 37, Shanti Nagar colony, Risalabazar, Secunderabad, 500010
                  </div>

              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>What's your story? </b>
                  Get in touch Always available for  freelancing if the right projects comes along me.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input style = {{backgroundColor: darkMode &&"#333 " }}type="text" placeholder="Name" name="user_name" />
                  <input style = {{backgroundColor: darkMode &&"#333 " }}type="text" placeholder="Subject" name="user-subject"/>
                  <input style = {{backgroundColor: darkMode &&"#333 " }}type="text" placeholder="Email" name="user-email"/>
                  <textarea style = {{backgroundColor: darkMode &&"#333 " }} rows="5" placeholder="Message" name="message"/>
                  <button>Submit</button>
              </form>

          </div>
      </div>
    </div>
  )
}

export default Contact

