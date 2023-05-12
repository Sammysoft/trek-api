import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./Routes";

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

const Port  = process.env.PORT || 8089;

server.use("/email", Router)

server.listen(Port, ()=>{
    console.log(`Server running on https://localhost:${Port}`)
})