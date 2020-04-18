import express from "express";
import bodyParser from "body-parser";

import cors from "cors";
import {
  addNewCustomer,
  addNewSaveMessage,
  getSavedMessages,
  addNewTempMessage,
  unsaveMessage,
} from "./controllers/apiController";

const app = express();

app.use(
  cors({
    origin: ["chrome-extension://aimcllkabmebgcedempppbeglclbmfka"],
    credentials: true,
  })
);

const PORT = 4000;

//bodyParser setup
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

var server = app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
var io = require("socket.io").listen(server);

app.get("/api/savedMessages", getSavedMessages);

// ON Company Sign Up, create new customer
app.post("/api/newCustomer", addNewCustomer);

// On Message Save
// // ON Company Sign Up, create new message
app.post("/api/newMessage", addNewSaveMessage);

app.post("/api/newTempMessage", addNewTempMessage);

app.post("/api/unsaveMessage", unsaveMessage);
io.on("connection", (socket) => {
  socket.emit("welcome-message", "Welcome to the chatroom");
  console.log("a user connected");
  socket.on("sent-message", (message) => {
    console.log(message);
  });
});
