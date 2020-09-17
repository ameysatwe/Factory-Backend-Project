require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
//const { mongoose } = require("./db/mongoose");
const port = process.env.PORT;
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    name: "Amey",
    email: "asatwe@gmail.com",
  });
});

app.post("/operation", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("/tool", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.get("/status/:id", (req, res) => {
  let statuses = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) statuses.push("Off");
    statuses.push("ON");
  }
  res.send({ no: req.params.id, code: statuses[req.params.id] });
});

app.post("/wear", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
