import React, { useState } from "react";
import style from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { AiOutlineSend } from "react-icons/ai";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  function getName(e) {
    setName(e.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }

  function getMessage(e) {
    setMessage(e.target.value);
  }

  function validateForm(e) {
    e.preventDefault();

    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^\S+@\S+\.\S+$/;

    const validationErrors = {};

    if (!nameRegex.test(name)) {
      validationErrors.name = "Invalid name";
    }

    if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (message.trim() === "") {
      validationErrors.message = "Message is required";
      
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      e.target.submit();
    }
  }

  return (
    <div className={style.wrapper}>
      <form
        action="https://formspree.io/f/xbjenbzl"
        method="POST"
        className={style.form}
        onSubmit={validateForm}
      >
        <div className={style.input_fields}>
        <TextField id="standard-basic" label="Name" variant="standard"
            
            className={style.name}
            onChange={getName}
            value={name}
            error={errors.name !== undefined}
            helperText={errors.name}
            required
            name="Name"
            sx={{color:'white'}}
          />
          <TextField id="standard-basic" label="Email" variant="standard"
           
            className={style.email}
            onChange={getEmail}
            value={email}
            error={errors.email !== undefined}
            helperText={errors.email}
            required
            name="Email"

          />
            <TextField
            id="standard-multiline-static"
            label="Message"
            placeholder="Enter Your Message"
            multiline
            // variant="standard"
            rows={4}
            className={style.textarea}
            onChange={getMessage}
            value={message}
            error={errors.message !== undefined}
            helperText={errors.message}
            required
            name="Message"
          />
          <button type="submit" className={style.btn_submit}>
            Submit <AiOutlineSend className={style.send_icon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
