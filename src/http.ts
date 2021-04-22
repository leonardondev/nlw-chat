import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
import { routes } from "./routes";

import createConnection from './database';
createConnection();

const app = express();
const http = createServer(app);
const io = new Server(http);

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
})
io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
})

app.use(express.json());
app.use(routes);

export { http, io };
