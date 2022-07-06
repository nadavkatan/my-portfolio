import React, { useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import "./styles/styles.css";
import { withStyles } from "@mui/styles";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundHome from "../backgroundHome/BackgroundHome";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#0DFDD7",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0DFDD7",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#0DFDD7",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "#0DFDD7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0DFDD7",
      },
      "&css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
        color: "white",
      },
    },
  },
  "css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "white",
  },
})(TextField);

const Contact = () => {
  const form = useRef();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          toast.success("Your message was sent. Thanks for reaching out!");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className="contact-container">
          {/* <BackgroundHome /> */}
      <ToastContainer />
      <Typography variant="h1" color="white" className="contact-heading">
        Reach Out!
      </Typography>
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
      >
        <CssTextField
          margin="normal"
          {...register("name")}
          required
          fullWidth
          id="email"
          label="Your Name"
          name="name"
          InputLabelProps={{ style: { color: "#0DFDD7" } }}
          sx={{ input: { color: "white" } }}
        />
        <CssTextField
          margin="normal"
          {...register("email", {
            required: "Please fill in your email",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
          required
          fullWidth
          id="email"
          label="Your Email Address"
          name="email"
          autoComplete="email"
          InputLabelProps={{ style: { color: "#0DFDD7" } }}
          sx={{ input: { color: "white" } }}
        />
        {errors.email && (
          <Typography variant="subtitle2" color="error">
            {errors.email.message}
          </Typography>
        )}
        <CssTextField
          multiline
          rows={6}
          maxRows={Infinity}
          margin="normal"
          {...register("message")}
          required
          fullWidth
          name="message"
          label="Your Message"
          type="text"
          id="message"
          InputLabelProps={{ style: { color: "#0DFDD7" } }}
          sx={{ textarea: { color: "white" } }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
