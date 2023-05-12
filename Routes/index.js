import express from "express";
import { sendMail } from "../MiddleWare";

const Router = express.Router();

Router.post("/send", (req, res, next) => {
  try {
    const { email, firstname, lastname, message } = req.body;
    if (!email || !lastname || !message || !firstname) {
      res.status(400).json({ data: "Please fill all details" });
    } else {
      const senderMail = email;
      const recieverMail = "ireoluwaenoch@gmail.com";
      const subject = `Message from ${firstname} ${lastname}`;
      const text = `Hello Sir/Ma`;
      const body = `${message}`;
      sendMail(senderMail, recieverMail, subject, text, body, (err) => {
        if (err) {
          console.log("Mail Not Sent");
        } else {
          console.log("Mail Sent");
        }
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ data: "Internal server error, Please try again later" });
  }
});

export default Router;
