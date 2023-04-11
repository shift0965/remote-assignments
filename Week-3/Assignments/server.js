const express = require("express");
const app = express();
const data = require("./routes/data.js");
const algorithm = require("./routes/algorithm.js");
const myName = require("./routes/myName.js");

app.use(express.json());
app.use("/data", data);
app.use("/algorithm", algorithm);
app.use("/myName", myName);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
