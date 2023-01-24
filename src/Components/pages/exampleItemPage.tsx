import React from "react";
import { examplesList } from "../examplesList";
import { siteItemInterface } from "../intesfaces";
import { useLocation, useParams } from "react-router";

const ExampleItemPage: React.FC = () => {
  const params: any = useParams();
  const targetElementIndex: any = examplesList.find(
    (item: siteItemInterface) => item.pageLink === params.Id
  );

  console.log(targetElementIndex);
  return <div></div>;
};

export default ExampleItemPage;
