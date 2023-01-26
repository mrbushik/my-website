import React from "react";
import { examplesList } from "../examplesList";
import { siteItemInterface } from "../intesfaces";
import { useParams } from "react-router";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const ExampleItemPage: React.FC = () => {
  const params: any = useParams();
  const targetExampleElement: siteItemInterface | undefined = examplesList.find(
    (item: siteItemInterface) => item.pageLink === params.Id
  );

  const handleDragStart = (e: any) => e.preventDefault();

  const items = [];
  if (targetExampleElement) {
    for (let i = 0; i < targetExampleElement.images.length - 1; i++) {
      items.push(
        <img
          src={targetExampleElement.images[i + 1]}
          onDragStart={handleDragStart}
          role="presentation"
        />
      );
    }
  }
  console.log(targetExampleElement);
  return (
    <div>
      <div className="container">
        <div className="example_item__text">
          <h2 className="example-item__title">{targetExampleElement?.title}</h2>
          <p className="example-item__description">
            {targetExampleElement?.description}
          </p>
        </div>
        {targetExampleElement?.hostLink && (
          <p className="example_link__text">
            You can see this website at{" "}
            <a
              className="example-page__link"
              href={targetExampleElement.hostLink}
              target="_blank"
            >
              this link{" "}
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
            </a>
          </p>
        )}
        <h5 className="example-carousel__title">
          View screenshots of this app
        </h5>
        <AliceCarousel mouseTracking items={items} />
      </div>
    </div>
  );
};

export default ExampleItemPage;