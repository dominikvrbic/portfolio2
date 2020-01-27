import React from "react";
import emailjs from "emailjs-com";
import { TextField } from "../components/TextField";
import { Button } from "@material-ui/core";
import { useForm, FormContext } from "react-hook-form";
import * as yup from "yup";

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
  const form = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      Email: "",
      Name: "",
      Message: ""
    },
    validationSchema: yup.object().shape({
      Email: yup
        .string()
        .required("Email is required")
        .email("Must be email"),
      Name: yup.string().required("Name is required"),
      Message: yup.string().required("Message is required")
    })
  });
  const onSubmit = (data: any) => {
    console.log(data);
    let templateParams = {
      name: `${data.Name}`,
      email: `${data.Email}`,
      message: `${data.Message}`
    };
    sendEmail(templateParams);
  };
  return (
    <div style={{ paddingTop: "1vh", width: "90vw", margin: "auto" }}>
      <FormContext {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <TextField name="Name" placeholder="Name" />

          <TextField name="Email" placeholder="Email" />

          <TextField name="Message" type="text" placeholder="Message" />
          <Button type="submit">Submit</Button>
        </form>
      </FormContext>
    </div>
  );
};
