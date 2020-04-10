import express from "express";
import bodyParser from "body-parser";
import { addNewCustomer } from "./controllers/apiController";
const app = express();

const PORT = 4000;

//bodyParser setup
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Node and express server on ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

// ON Company Sign Up, create new customer
app.post("/api/newCustomer", addNewCustomer);
