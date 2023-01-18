import React from "react";
import { experienceInterface } from "../intesfaces";

const ExperienceItem: React.FC<experienceInterface> = ({
  year,
  description,
  length,
  company,
}) => {
  return (
    <div className='experience-item'>
      <div className="experience-length__description">
        <p className="experience-year">{year}</p>
        <p >{length}</p>
      </div>
      <div className="experience-company__description">
        <h5>{company}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
