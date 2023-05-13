import express from "express";
import { sendMail } from "../MiddleWare/index.js";

const Router = express.Router();

Router.post("/send", (req, res, next) => {
  try {
    console.log(req.body);
    const { email, firstname, lastname, message } = req.body;
    if (!email || !lastname || !message || !firstname) {
      res.status(400).json({ data: "Please fill all details" });
    } else {
      const senderMail = email;
      const recieverMail = "Ireoluwaenoch@gmail.com";
      const subject = `Message from ${firstname} ${lastname}`;
      const text = `Hello Sir/Ma`;
      const body = `${message}`;
      sendMail(senderMail, recieverMail, subject, text, body, (err) => {
        if (err) {
          console.log("Mail Not Sent");
        } else {
          console.log("Mail Sent");
          res.status(200).json({ data: "Mail  sent successfully" });
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
