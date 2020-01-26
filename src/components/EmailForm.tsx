import React, { useState } from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { css } from "emotion";
import { useForm } from "react-hook-form";
const nameEmailStyle = css`
  display: flex;
  flex-direction: column;
`;
const sendEmail = (templateParams: any) => {
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

export const EmailForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    var templateParams = {
      name: `${data.eName}`,
      email: `${data.eEmail}`,
      message: `${data.eMessage}`
    };
    sendEmail(templateParams);

    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="eName"
        name="eName"
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="eEmail"
        name="eEmail"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        name="eMessage"
        ref={register({ required: true, max: 200, min: 10 })}
      />
      <input type="submit" />
    </form>
  );
};

// <form
//   className={classes.root}
//   onSubmit={sendEmail}
//   noValidate
//   autoComplete="off"
// >
//   <div>
//     <div className={nameEmailStyle}>
//       <TextField
//         required
//         id="standard-required"
//         label="Required"
//         defaultValue=""
//         onChange={e => {
//           console.log(eName);
//           seteName(e.target.value);
//         }}
//       />

//       <TextField
//         required
//         id="standard-required"
//         type="email"
//         label="Required"
//         defaultValue=""
//         onChange={e => {
//           seteEmail(e.target.value);
//         }}
//       />
//     </div>
//     <TextField
//       id="outlined-textarea"
//       label="Multiline Placeholder"
//       placeholder="Placeholder"
//       multiline
//       variant="outlined"
//       onChange={e => {
//         seteMessage(e.target.value);
//       }}
//     />
//     <Button type="submit">Submit</Button>
//   </div>
// </form>

// <form className="contact-form" onSubmit={sendEmail}>
//   <label>Name</label>
//   <input type="text" name="name" value="name" />
//   <label>Email</label>
//   <input type="email" name="email" value="email" />
//   <label>Message</label>
//   <textarea name="message" />
//   <input type="submit" value="message" />
// </form>
