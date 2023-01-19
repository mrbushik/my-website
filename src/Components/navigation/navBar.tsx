import React from "react";
import { Link } from "react-router-dom";
import { contactIcon } from "../../styles/icons";

type selectionListItem = {
  name: string;
  link: string;
};

const NavBar: React.FC = () => {
  const sectionList: selectionListItem[] = [
    { name: "Contacts", link: "contacts" },
    { name: "My works", link: "my-works" },
    { name: "Resume", link: "resume" },
  ];

  return (
    <div>
      <nav className="nav-bar">
        <div className="container">
          <div className="nav-bar__container">
            <div>
              <ul className="nav-list">
                <li className="navbar-link">
                  <Link className="nav-link" to="/">
                    Main
                  </Link>
                </li>
                {sectionList.map((item, index) => (
                  <li key={index} className="navbar-link">
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
              <div className="adaptive-btn">
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
                    stroke-width="2.5"
                  />
                  <path
                    d="M1.66663 10.8333H18.3333"
                    stroke="black"
                    stroke-width="2.5"
                  />
                  <path
                    d="M1.66663 17.5H18.3333"
                    stroke="black"
                    stroke-width="2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <ul className="nav-list">
          {sectionList.map((item, index) => (
            <li key={index} className="navbar-link">
              <Link className="nav-link" to={item.link}>
                {item.name}{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L15.9314 12L8 20"
                    stroke="black"
                    stroke-width="2.2"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
