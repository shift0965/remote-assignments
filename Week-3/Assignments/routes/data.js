const express = require("express");
const router = express.Router();

function sumFromOne(num) {
  return ((1 + num) * num) / 2;
}

router.get("/", (req, res) => {
  const { number } = req.query;

  const obj = {
    valid: false,
    message: "",
    value: 0,
  };

  //if it empty
  if (!number) {
    obj.message = "Lack of Parameter";
    res.json(obj);
  }
  //check if it is a positive integer with regex
  else if (!/^\d+$/.test(number)) {
    obj.message = "Wrong Parameter";
    res.json(obj);
  } else {
    //the time complexity is O(1) no matter how large the number is
    obj.value = sumFromOne(+number);
    obj.message = "Success";
    obj.valid = true;
    res.json(obj);
  }
});

module.exports = router;
