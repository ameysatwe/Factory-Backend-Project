require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
//const { mongoose } = require("./db/mongoose");
const port = process.env.PORT;

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

app.post("/wear", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
