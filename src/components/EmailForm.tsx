import React, { useState } from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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
  const [eName, seteName] = useState("");
  const [eEmail, seteEmail] = useState("");
  const [eMessage, seteMessage] = useState("");

  let templateParams = {
    name: `${eName}`,
    email: `${eEmail}`,
    message: `${eMessage}`
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        "default_service",
        "contactform",
        templateParams,
        "user_GMHAo3Sd1v18QWdl3q3oT"
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
    <form
      className={classes.root}
      onSubmit={sendEmail}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue=""
          onChange={e => {
            console.log(eName);
            seteName(e.target.value);
          }}
        />

        <TextField
          required
          id="standard-required"
          type="email"
          label="Required"
          defaultValue=""
          onChange={e => {
            seteEmail(e.target.value);
          }}
        />

        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
          onChange={e => {
            seteMessage(e.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
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
