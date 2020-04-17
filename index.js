import express from "express";
import bodyParser from "body-parser";
var http = require("http").createServer(app);

import cors from "cors";
import {
  addNewCustomer,
  addNewSaveMessage,
  getSavedMessages,
  addNewTempMessage,
} from "./controllers/apiController";
var io = require("socket.io")(http);
io.on("connection", (socket) => {
  console.log("a user connected");
});

const app = express();

app.use(cors());
const PORT = 4000;

//bodyParser setup
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

app.get("/api/savedMessages", getSavedMessages);

// ON Company Sign Up, create new customer
app.post("/api/newCustomer", addNewCustomer);

// On Message Save
// // ON Company Sign Up, create new message
app.post("/api/newMessage", addNewSaveMessage);

app.post("/api/newTempMessage", addNewTempMessage);
