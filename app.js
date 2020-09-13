require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const { mongoose } = require("./db/mongoose");
const port = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
  res.send({
    name: "Amey",
    email: "asatwe@gmail.com",
  });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
