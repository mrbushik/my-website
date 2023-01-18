import React from "react";
import { experienceInterface } from "../intesfaces";
import ExperienceItem from "../ui/experienceItem";

const ResumePage: React.FC = () => {
  const skillsList: string[] = [
    "React JS",
    "Redux",
    "Redux-thunk",
    "React-router",
    "JavaScript",
    "TypeScript",
    "Node JS",
    "Express JS",
    "Git",
  ];
  const experienceList: experienceInterface[] = [
    {
      year: 2022,
      length: "3 months",
      company: "Itransition, Intern Frontend developer ",
      description:
        "During the intership, I developed a full-stack application using: React, Redux, Node JS, Express, MongoDB.",
    },
    {
      year: 2022,
      length: "6 months",
      company: "Insaitika, Frontend developer  ",
      description:
        "I did an internship in the direction of frontend development and worked with real orders",
    },
    {
      year: 2021,
      length: "1 year",
      company: "PC master, repair of computers laptops and phones ",
      description:
        "He was engaged in the repair of various digital devices, communicated with customers and sold various services.",
    },
  ];
  return (
    <div>
      <div className="resume-header">
        <div className="resume-header__container">
          <h2>Nikita</h2>
          <p className="resume-suriname">Bushuev</p>
          <p className="resume-subtitle">Frontend developer</p>
        </div>
      </div>
      <div className="container">
        <div className="resume-contact__container">
          <div className="resume-contact__wrapper">
            <h5 className="resume-section__name">Contact</h5>
            <div>
              <img
                className="resume-contact-__img"
                src="https://res.cloudinary.com/drfjcq9hg/image/upload/v1673863049/bushik123/phone_tpa14i.png"
              />
              <a>+375298855398</a>
            </div>
            <div>
              <img
                className="resume-contact-__img"
                src="https://res.cloudinary.com/drfjcq9hg/image/upload/v1673863049/bushik123/mail_r75cd3.png"
              />
              <a>mrbushik1@gmail.com</a>
            </div>
            <div>
              <img
                className="resume-contact-__img"
                src="https://res.cloudinary.com/drfjcq9hg/image/upload/v1673862784/bushik123/location_eohzk2.png"
              />
              <p>Wroclaw, Poland</p>
            </div>
          </div>
          <div className="resume-about__wrapper">
            <h5 className="resume-section__name">About Me</h5>
            <p>
              I have been developing in the direction of frontend development
              for more than a year, had experience with several programming
              languages. I will be glad to continue my development and be full
              for the company
            </p>
          </div>
        </div>
        <div className="resume-middle__section">
          <div className="resume_skills__list">
            <h5 className="resume-section__name">Skills</h5>
            <ul className="skills-list">
              {skillsList.map((skill: string, index: number) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="resume-experience__education">
            <div className="resume-experience">
              <h5 className="resume-section__name">Experience</h5>
              {experienceList.map(
                (item: experienceInterface, index: number) => (
                  <ExperienceItem
                    year={item.year}
                    length={item.length}
                    company={item.company}
                    description={item.description}
                    key={index}
                  />
                )
              )}
            </div>
            <div className="resume-education">
              <h5 className="resume-section__name">Education</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;