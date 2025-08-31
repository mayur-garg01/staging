const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("hello ji");
});

app.get("/", (req, res) => {
  res.send("this is a response");
});

app.get("/home", (req, res) => {
  res.send("this is a home response");
});
