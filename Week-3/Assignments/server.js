const express = require("express");
const app = express();
const data = require("./routes/data.js");
const algorithm = require("./routes/algorithm.js");
const myName = require("./routes/myName.js");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/data", data);
app.use("/algorithm", algorithm);
app.use("/", myName);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/sum", (req, res) => {
  res.sendFile(__dirname + "/public/sum.html");
});
app.get("/algorithm", function (req, res) {
  res.sendFile(__dirname + "/public/algorithm.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
