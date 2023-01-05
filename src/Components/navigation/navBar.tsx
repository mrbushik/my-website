import React from "react";
type selectionListItem = {
  name: string;
  link: string;
};

const NavBar: React.FC = () => {
  const sectionList: selectionListItem[] = [
    { name: "contacts", link: "contacts" },
    { name: "my works", link: "my-works" },
    { name: "resume", link: "resume" },
  ];

  return (
    <div className="container">
      <nav>
        <ul>
          {/*{sectionList.map((item, index) => (*/}
          {/*  <Link>*/}
          {/*    {" "}*/}
          {/*    // <li key={index}>{item.name}</li>*/}
          {/*  </Link>*/}
          {/*))}*/}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
