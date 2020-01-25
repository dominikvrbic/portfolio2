import React from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  })
);

export const EmailForm = () => {
  let templateParams = {
    name: "aa",
    email: "",
    message: ""
  };
  const sendEmail = (e: any) => {
    // templateParams.name =
    // templateParams.email =
    // templateParams.message =
    e.preventDefault();
    emailjs
      .send(
        "gmail",
        "template_bt2nNASD",
        templateParams,
        "user_rI5uFl3P4Pr0bZYFH3fXW"
      )
      .then(
        (response: any) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err: Error) => {
          console.log("FAILED...", err);
        }
      );
  };
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error
          id="outlined-error-helper-textr"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
    </form>
  );
};
// <form className="contact-form" onSubmit={sendEmail}>
//   <label>Name</label>
//   <input type="text" name="name" value="name" />
//   <label>Email</label>
//   <input type="email" name="email" value="email" />
//   <label>Message</label>
//   <textarea name="message" />
//   <input type="submit" value="message" />
// </form>
