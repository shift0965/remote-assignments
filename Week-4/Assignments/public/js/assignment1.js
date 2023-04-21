function delayedResult(n1, n2, delayTime, callback) {
  /*
  setTimeout(function () {
    callback(n1 + n2);
  }, delayTime);
  */
  let leftTime = delayTime;
  callback(leftTime / 1000);
  setInterval(function () {
    leftTime -= 1000;
    if (leftTime <= 0) {
      const result = n1 + n2;
      callback("The result is <br>" + result);
    } else {
      callback(leftTime / 1000);
    }
  }, 1000);
}

/*
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds
*/

function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(n1 + n2);
    }, delayTime);
  });
}

async function main() {
  const num = await delayedResultPromise(4, 5, 3000);
  console.log(num);
}
//main();

const formSubmit = document.querySelector("#formSubmit");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const delayTime = document.querySelector("#delayTime");
const headline = document.querySelector("#headline");

formSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const n1 = parseInt(number1.value);
  const n2 = parseInt(number2.value);
  const delay = parseInt(delayTime.value) * 1000;
  if (isNaN(n1) || isNaN(n2) || isNaN(delay)) {
    render("Please enter valid numbers");
  } else {
    delayedResult(n1, n2, delay, render);
  }
});

function render(result) {
  headline.innerHTML = `
  <h1>${result}</h1>
  `;
}
