import React from "react";
import { selectionListItem } from "../intesfaces";
import { Link, useHistory, useLocation } from "react-router-dom";
import { contactIcon } from "../../styles/icons";

type navBarProps = {
  sectionList: selectionListItem[];
  handleClick(): void;
};
const AdaptiveNavBar: React.FC<navBarProps> = ({
  sectionList,
  handleClick,
}) => {
  const location = useLocation();

  return (
    <div className="nav-bar__mobile">
      <ul className="nav-list__mobile">
        {sectionList.map((item, index) => (
          <li key={index + item.link} className={"navbar-link__mobile"}>
            <Link
              className={
                location.pathname === item.link
                  ? "nav-link__mobile blue-text "
                  : "nav-link__mobile"
              }
              to={item.link}
              onClick={handleClick}
            >
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
                  strokeWidth="2.2"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-mobile__container">
        <a
          href="mailto:mrbushik1@gmail.com"
          className="target-btn nav-btn__mobile"
        >
          {contactIcon}
          Send email
        </a>
      </div>
    </div>
  );
};

export default AdaptiveNavBar;
