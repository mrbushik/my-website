import React from "react";
import { examplesList } from "../examplesList";
import { siteItemInterface } from "../intesfaces";
import ExampleItems from "../ui/exampleItems";

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
            <ExampleItems exampleItem={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;
