import React from "react";
import style from "./Navbar.module.css";
import { Data } from "../../Data/Data";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.nav_lists}>
        {Data.map((list, index) => (
          <nav key={index}>
            <ScrollLink
              to={list.path}
              smooth={true}
              duration={100}
              offset={-82}
              className={style.nav_link}
              activeClass={style.active}
            >
              {list.name}
            </ScrollLink>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
