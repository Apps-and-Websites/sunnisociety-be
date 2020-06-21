const express = require("express");

const configMiddleware = require("./configMiddlewares.js");
const authenticationRouter = require("./auth/authRouter.js");
const publicRouter = require("./routes/publicRouter.js");
const authRouter = require("./routes/authRouter.js");

const server = express();
configMiddleware(server);

server.get("/", (req, res) => res.send("Server is up and running"));
server.use("/api/", authenticationRouter);
server.use("/api/", publicRouter);
server.use("/api/auth", authRouter);

module.exports = server;
