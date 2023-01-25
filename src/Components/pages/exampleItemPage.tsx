import React from "react";
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
    <div className='example_item__text'>
      <h2 className="example-item__title">{targetExampleElement?.title}</h2>
      <p className="example-item__description">
        {targetExampleElement?.description}
      </p>
    </div>
        {targetExampleElement?.hostLink && (
          <p>
            You can see this website at{" "}
            <a href={targetExampleElement.hostLink} target="_blank">
              this link
            </a>{" "}
          </p>
        )}
        <AliceCarousel mouseTracking items={items} />
      </div>
    </div>
  );
};

export default ExampleItemPage;
