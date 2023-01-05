import React from "react";
import { Link } from "react-router-dom";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              Send email
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
