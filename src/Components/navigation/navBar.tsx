import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contactIcon } from "../../styles/icons";
import { selectionListItem } from "../intesfaces";
import AdaptiveNavBar from "./adaptiveNavBar";

const NavBar: React.FC = () => {
  let counter: number = -100;
  let interval: any;
  const [activeBtn, setActiveBtn] = useState<boolean>(false);

  const sectionList: selectionListItem[] = [
    { name: "Contacts", link: "/contacts" },
    { name: "My works", link: "/my-works" },
    { name: "Resume", link: "/resume" },
  ];

  useEffect(() => {
    const navMobile: any = document.querySelector(".nav-bar__mobile");
    if (navMobile && counter !== 0) {
      interval = setInterval(() => {
        handleChangeTransformStyle(navMobile);
      }, 5);
    }
    return () => clearInterval(interval);
  }, [activeBtn]);

  const handleChangeTransformStyle = (element: any) => {
    counter = counter + 5;
    if (counter > -1) {
      clearInterval(interval);
    }
    element.style.transform = `translateX(${counter}vw)`;
  };

  const handleBtnClick = () => setActiveBtn((perv) => !perv);

  return (
    <div>
      <nav className="nav-bar">
        <div className="container">
          <div className="nav-bar__container">
            <div>
              <ul className="nav-list">
                <li className="navbar-link">
                  <Link

                    className="nav-link"
                    to="/"
                    onClick={() => setActiveBtn(false)}
                  >
                    Main
                  </Link>
                </li>
                {sectionList.map((item, index) => (
                  <li key={index + "1"} className="navbar-link">
                    <Link className="nav-link" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a
                href="mailto:mrbushik1@gmail.com"
                className="target-btn nav-btn"
              >
                {contactIcon}
                Send email
              </a>
              <div className="adaptive-btn" onClick={handleBtnClick}>
                {activeBtn ? (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.48535 25.4852L25.4559 8.51467"
                      stroke="black"
                      strokeWidth="3"
                    />
                    <path
                      d="M25.4558 25.4852L8.48525 8.51467"
                      stroke="black"
                      strokeWidth="3"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66663 4.16663H18.3333"
                      stroke="black"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M1.66663 10.8333H18.3333"
                      stroke="black"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M1.66663 17.5H18.3333"
                      stroke="black"
                      strokeWidth="2.5"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {activeBtn && (
        <AdaptiveNavBar
          sectionList={sectionList}
          handleClick={handleBtnClick}
        />
      )}
    </div>
  );
};

export default NavBar;
