const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { number } = req.query;
  //if it empty
  if (!number) {
    res.send("Lack of Parameter");
  }
  //check if it is a positive integer with regex
  else if (/^\d+$/.test(number)) {
    //the time complexity is O(1) no matter how large the number is
    const int = +number;
    const ans = ((1 + int) * int) / 2;

    res.send(`The result is ${ans}`);
  } else {
    res.send("Wrong Parameter");
  }
});

module.exports = router;
