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
    <nav className="nav-bar">
      <div className="container">
        <div className="nav-bar__container">
          <div>
            <ul className="nav-list">
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
            <a href="mailto:mrbushik1@gmail.com" className="target-btn nav-btn">
              {contactIcon}
              Send email
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
