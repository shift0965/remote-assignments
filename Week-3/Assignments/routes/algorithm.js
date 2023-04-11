const express = require("express");
const router = express.Router();

function twoSum(nums, target) {
  //HashMap sol: time O(n), space O(n)

  //Iterate through the array and store the difference between the target and the current number
  //if the current number is found in the hashmap (a previous number that add current value equal to the target),
  //return the index of the previous number and the current number

  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[target - nums[i]] = i;
    } else {
      return [map[nums[i]], i];
    }
  }

  return null;
}

router.get("/", function (req, res) {
  let nums = [2, 7, 11, 15];
  let target = 9;
  res.json({ nums, target, ans: twoSum(nums, target) });
});

module.exports = router;
