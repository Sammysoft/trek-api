import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./Routes/index.js";

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type"
    );
    next();
  });
  server.use(cors());


const Port  = process.env.PORT || 8089;

server.use("/email", Router)

server.listen(Port, ()=>{
    console.log(`Server running on https://localhost:${Port}`)
})