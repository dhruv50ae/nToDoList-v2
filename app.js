const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>It's the weekend, time to rest</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, () => {
  console.log("The server is running");
});
