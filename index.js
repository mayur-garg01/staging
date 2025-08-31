const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("hello ji");
});

app.get("/", (req, res) => {
  res.send("this is a response");
});

//simple route
app.get("/home", (req, res) => {
  res.send("this is a home response");
});

// nested route
app.get("/home/user", (req, res) => {
  res.send("this is a usr response");
});

//pass value through Route Parameters
app.get("/home/user/:userid", (req, res) => {
  res.send(req.params.userid);
});

app.get("/search", (req, res) => {
  res.send(req.query);
});
