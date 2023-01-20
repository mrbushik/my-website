import React from "react";
import { aboutMeItemsInterface } from "../intesfaces";
import { Link } from "react-router-dom";
import {
  linkedInIcon,
  mailIcon,
  resumeIcon,
  siteExampleIcon,
} from "../../styles/icons";

const SiteSections: React.FC = () => {
  const aboutMeItems: aboutMeItemsInterface[] = [
    {
      icon: resumeIcon,
      link: "/resume",
      title: "Review my resume",
      url: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1673526467/bushik123/resume_item_j68jpr.png",
      background: "aquamarine",
    },
    {
      icon: siteExampleIcon,
      link: "/works",
      title: "Look at my work",
      url: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1673526466/bushik123/%D0%BD%D0%BE%D1%83%D1%82_%D1%81_%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%BC_fwv17c.png",
      background: "blue",
    },
  ];
  const aboutMeItemsContacts: aboutMeItemsInterface[] = [
    {
      icon: mailIcon,
      link: "mrbushik1@gmail.com",
      title: "Write me an email",
      url: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1673526466/bushik123/google_laptop_llxte2.png",
      background: "pink1",
    },
    {
      icon: linkedInIcon,
      link: "https://www.linkedin.com/in/nikita-bushuev-4347ab237/",
      title: "Visit my LinkedIn profile",
      url: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1673526466/bushik123/linkedIn_trrrsn.png",
      background: "pink2",
    },
  ];
  return (
    <div className="container">
      <h3 className="main-links">
        Find out more about me <br />
        or contact me
      </h3>
      <div className="section-wrapper">
        {aboutMeItems.map((item: aboutMeItemsInterface, index: number) => (
          <Link to={item.link} key={index}>
            <div className={"about-me_container " + item.background}>
              <p>
                {item.icon}
                {item.title}
              </p>
              <img src={item.url} />
            </div>
          </Link>
        ))}
          <a href={"mailto:" + aboutMeItemsContacts[0].link}>
            <div
              className={
                "about-me_container " + aboutMeItemsContacts[0].background
              }
            >
              <p>
                {aboutMeItemsContacts[0].icon}
                {aboutMeItemsContacts[0].title}
              </p>
              <img src={aboutMeItemsContacts[0].url} />
            </div>
          </a>
          <a href={aboutMeItemsContacts[1].link} target="_blank">
            <div
              className={
                "about-me_container " + aboutMeItemsContacts[1].background
              }
            >
              <p>
                {aboutMeItemsContacts[1].icon}
                {aboutMeItemsContacts[1].title}
              </p>
              <img src={aboutMeItemsContacts[1].url} />
            </div>
          </a>
      </div>
    </div>
  );
};

export default SiteSections;
