import React from "react";
import emailjs from "emailjs-com";

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
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" value="name" />
      <label>Email</label>
      <input type="email" name="email" value="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="message" />
    </form>
  );
};
