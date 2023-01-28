import React, { useEffect } from "react";
import MainTitle from "../ui/mainTitle";
import SiteSections from "../ui/siteSections";
import ContactForm from "../ui/contactForm";

const MainPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <MainTitle />
      <SiteSections />
      <ContactForm />
    </>
  );
};

export default MainPage;
