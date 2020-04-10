import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {
  addNewCustomer,
  addNewSaveMessage,
  getSavedMessages,
} from "./controllers/apiController";
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

app.get("/api/savedMessages", getSavedMessages);
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

// ON Company Sign Up, create new customer
app.post("/api/newCustomer", addNewCustomer);

// On Message Save
// // ON Company Sign Up, create new customer
app.post("/api/newMessage", addNewSaveMessage);
