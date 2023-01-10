import React from "react";
import { Link } from "react-router-dom";

const MainTitle: React.FC = () => {

  return (
    <div className="container">
      <div className="owner-benefit__container">
        <div className="owner-img__container">
          <img
            className="owner-sticker__img"
            src="https://res.cloudinary.com/drfjcq9hg/image/upload/v1673012366/bushik123/My-sticker_zf1hsr.png"
          />
        </div>
        <div className="owner-info__container">
          <div className="owner-benefit">
            <h1>Nikita Bushuev</h1>
            <p>
              React Frontend Developer <Link to="/">learn more</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
