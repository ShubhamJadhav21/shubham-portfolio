import React, { useEffect, useState } from "react";
import style from "./GoToTop.module.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll = document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
    {isVisible && (
      <div className={style.GoToTop}>
        <FaArrowUp className={style.top_btn} onClick={scrollToTop} />
      </div>
    )}
    </>
  );
};

export default GoToTop;
