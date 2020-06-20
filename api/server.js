const express = require("express");

const configMiddleware = require("./configMiddlewares.js");
const authRouter = require("./auth/authRouter.js");

const server = express();
configMiddleware(server);

server.get("/", (req, res) => res.send("Server is up and running"));
server.use("/api/auth/", authRouter);

module.exports = server;
