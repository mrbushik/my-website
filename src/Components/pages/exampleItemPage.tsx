import React, { useEffect } from "react";
import { examplesList } from "../examplesList";
import { siteItemInterface } from "../intesfaces";
import { useParams } from "react-router";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";
const ExampleItemPage: React.FC = () => {
  const params: any = useParams();
  const targetExampleElement: siteItemInterface | undefined = examplesList.find(
    (item: siteItemInterface) => item.pageLink === params.Id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleDragStart = (e: any) => e.preventDefault();

  const items = [];
  if (targetExampleElement && window.screen.width > 1000) {
    for (let i = 0; i < targetExampleElement.images.length - 1; i++) {
      items.push(
        <img
          src={targetExampleElement.images[i + 1]}
          onDragStart={handleDragStart}
          role="presentation"
          alt="example of a developed website"
        />
      );
    }
  } else if (targetExampleElement && window.screen.width <= 1000) {
    for (let i = 0; i < targetExampleElement.mobileImages.length; i++) {
      items.push(
        <img
          src={targetExampleElement.mobileImages[i]}
          onDragStart={handleDragStart}
          role="presentation"
          alt="example of a developed website"
        />
      );
    }
  }

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
        {window.screen.width <= 1000 ? (
          <AliceCarousel mouseTracking items={items} />
        ) : (
          <AliceCarousel mouseTracking items={items} />
        )}
      </div>
    </div>
  );
};

export default ExampleItemPage;
