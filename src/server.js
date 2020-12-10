const express = require("express");
const projectRoutes = require("./projects");

const {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  badRequestHandler,
  catchAllHandler,
} = require("./errorHandling");

const server = express();
const port = 1996;

server.use(express.json());
server.use("/projects", projectRoutes);
server.use("/files", require("./files"));

server.use(notFoundHandler);
server.use(unauthorizedHandler);
server.use(forbiddenHandler);
server.use(badRequestHandler);
server.use(catchAllHandler);

server.listen(port, () => {
  console.log("server at port: ", port);
});
