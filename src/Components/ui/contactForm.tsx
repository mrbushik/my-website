import React from "react";
import { Link } from "react-router-dom";
import { contactIcon } from "../../styles/icons";

const ContactForm: React.FC = () => {
  return (
    <div>
      <div className="contacts-plug"></div>
      <div className="main-contacts__form">
        <div className="container">
          <div className="main-contacts__rectangle">
            <div className="contacts-title__wrapper">
              <h4>Browse my contacts and contact me</h4>
              <p>
                You can write both to the mail and to messengers or call by
                phone. Choose any convenient method.
              </p>
            </div>
            <a href="mailto:mrbushik1@gmail.com" className="contact-btn">
              {contactIcon} Contact
            </a>
            <div className="indicator-contact__container">
              <img
                className="indicator-img"
                src="https://res.cloudinary.com/drfjcq9hg/image/upload/v1674148505/bushik123/I_m2_rsygoj.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
