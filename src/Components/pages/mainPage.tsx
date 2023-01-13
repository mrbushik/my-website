import React from "react";
import MainTitle from "../ui/mainTitle";
import SiteSections from "../ui/siteSections";
import ContactForm from "../ui/contactForm";

const MainPage: React.FC = () => {
  return (
    <>
      <MainTitle />
      <SiteSections />
      <ContactForm />
    </>
  );
};

export default MainPage;
