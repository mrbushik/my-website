import React from "react";
import { examplesList } from "../examplesList";
import { siteItemInterface } from "../intesfaces";

const ExamplesPage: React.FC = () => {
  return (
    <div>
      <div className="container examples-main__container">
        <div className="examples_page__title">
          <h2>Viev examples of my work</h2>
          <p>
            Most of the applications are developed using React library and other
            modern technologies
          </p>
        </div>
        <div>
          {examplesList.map((item: siteItemInterface, index: number) => (
            <div className="site-item">
              <div className="site-item__info">
                <div>
                  <h5>{item.title}</h5>
                  <p className="site-item__description">{item.description}</p>
                  <div className="site-item__separator"></div>
                  <p className="site-item__more">
                    Learn more{" "}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 3.1V0.900002H14.1V14H11.9V4.65564L1.77782 14.7778L0.222183 13.2222L10.3444 3.1H1Z"
                        fill="black"
                      />
                    </svg>
                  </p>
                </div>
              </div>
              <div className="site-item__image">
                <img src={item.images[0]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;
