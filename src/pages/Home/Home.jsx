import React, { useState } from "react";
import style from "./Home.module.css";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Navbar from "../../components/Navbar/Navbar";
import { Data } from "../../Data/Data";
import { Link as ScrollLink } from "react-scroll";
import personalResume from '../../assets/personalResume.pdf'
import shubham from '../../assets/shubham.png'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={style.wrapper} id="/">
        <div className={style.navbar}>
          <Navbar />
        </div>
        <div className={style.hamburger_menu}>
          <h1 className={style.heading}>Welcome</h1>
          {isOpen ? (
            <RxCross2
              className={style.cross_icon}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <RiMenu3Line className={style.menu} onClick={openMenu} />
          )}
        </div>
        <div className={`${style.mobile_menu} ${isOpen && style.active}`}>
          <div className={style.mobile_menu_content}>
            {Data.map((list, index) => (
              <nav key={index}>
                <ScrollLink
                  to={list.path}
                  smooth={true}
                  duration={100}
                  className={style.nav_link}
                  activeClass={style.active}
                  onClick={() => setIsOpen(false)}
                >
                  {list.icon && <list.icon className={style.menu_icon} />}
                  {list.name}
                </ScrollLink>
              </nav>
            ))}
          </div>
        </div>

        <div className={style.container}>
          <div className={style.left_section}>
            <div className={style.content}>
              <h1 className={style.heading}>Hey, I'm Shubham Jadhav</h1>
              <h6 className={style.sub_heading}>Frontend Developer</h6>
              <p className={style.text}>
                "Design is not just what it looks like and feels like. Design is
                how it works."
              </p>
              <button
                className={style.btn}
                onClick={() => window.open(personalResume)}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className={style.right_section}>
            <div className={style.container_image}>
              <img
                src={shubham}
                alt="shubham"
                className={style.image}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
