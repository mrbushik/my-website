import React, { useEffect } from "react";
import { contacts } from "../intesfaces";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const contactItems: contacts[] = [
    {
      imgLink:
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1673863049/bushik123/mail_r75cd3.png",
      itemLink: "mailto:mrbushik1@gmail.com",
      title: "mrbushik1@gmail.com",
    },
    {
      imgLink:
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1673863049/bushik123/phone_tpa14i.png",
      itemLink: "tel:+375298855398",
      title: "+375298855398",
    },
    {
      imgLink:
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1674143754/bushik123/linkedin_zbufbo.png",
      itemLink: "https://www.linkedin.com/in/nikita-bushuev-4347ab237/",
      title: "My linkedIn profile",
    },
    {
      imgLink:
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1674143754/bushik123/github_b8782x.png",
      itemLink: "https://github.com/mrbushik",
      title: "My GitHub",
    },
    {
      imgLink:
        "https://res.cloudinary.com/drfjcq9hg/image/upload/v1674143754/bushik123/telegram_bxpfc4.png",
      itemLink: "https://t.me/bushikov",
      title: "Telegram profile",
    },
  ];
  return (
    <div className="contact-wrapper">
      <div className="contact-page__description">
        <h3 className="">My Contacts</h3>
        <p>
          You can contact me in a way that is convenient for you or view my
          social networks
        </p>
      </div>
      <div className="container">
        <div className="contact-_page_container">
          <div className="contact-page__item">
            <img src="https://res.cloudinary.com/drfjcq9hg/image/upload/v1673862784/bushik123/location_eohzk2.png" />{" "}
            <p>Wroclaw, Poland</p>
          </div>
          {contactItems.map((item: contacts, index: number) => (
            <div className="contact-page__item" key={index}>
              <img src={item.imgLink} />
              <a className="nav-link" href={item.itemLink}>
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
