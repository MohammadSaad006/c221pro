const express = require("express");
const app = express();
const server = require("http").Server(app);

var nodeMailer = require("nodemailer")

app.use(express.json())

const { v4: uuidv4 } = require("uuid");

const transpoter=nodeMailer.createTransport({
    port:587,
    host:"smtp.gmail.com",
    auth:{
        user:"mohammadsaad35786@gmail.com",
        pass:"kzaleaoqebsfrgva"
    },
    secure:true

})

server.listen(process.env.PORT || 3030);