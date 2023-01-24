import React from "react";
import { siteItemInterface } from "../intesfaces";
import { Link } from "react-router-dom";

type exampleItemsProps = {
  exampleItem: siteItemInterface;
};

const ExampleItems: React.FC<exampleItemsProps> = ({ exampleItem }) => {
  return (
    <div className="site-item">
      <div className="site-item__info">
        <div>
          <h5>{exampleItem.title}</h5>
          <p className="site-item__description">{exampleItem.description}</p>
          <div className="site-item__separator"></div>
          <Link
            to={"my-works/" + exampleItem.pageLink}
            className="site-item__more"
          >
            Learn more
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 3.1V0.900002H14.1V14H11.9V4.65564L1.77782 14.7778L0.222183 13.2222L10.3444 3.1H1Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="site-item__image">
        <img src={exampleItem.images[0]} />
      </div>
    </div>
  );
};

export default ExampleItems;
