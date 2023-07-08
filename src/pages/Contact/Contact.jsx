import React from "react";
import style from "./Contact.module.css";
import Form from "../../components/Form/Form";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FiMapPin } from "react-icons/fi";
const Contact = () => {
  return (
    <div className={style.wrapper} id="contact">
      <div className={style.contact_heading}>Contact</div>
      <div className={style.wrapper_all}>
        <div className={style.container}>
          <div className={style.wrapper_form}>
            <Form />
          </div>
          <div className={style.contact_icons}>
            <div className={style.wrapper_github}>
              <a href="https://github.com/ShubhamJadhav21" target="_blank">
              <GitHubIcon className={style.github} />
              </a>
            </div>
            <div className={style.wrapper_linkdin}>
              <a href="https://www.linkedin.com/in/shubham-jadhav21" target="_blank">
              <LinkedInIcon className={style.Linkdin} sx={{ color: "white" }} />
              </a>
            </div>
            <div className={style.wrapper_map}>
            
              <FiMapPin className={style.map} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
