const form = document.querySelector("#form");
const input = document.querySelector("#number");
const headline = document.querySelector("#headline");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  number = input.value;
  if (!number) {
    headline.innerHTML = "<h1>Lack of Parameter</h1>";
  }
  //check if it is a positive integer with regex
  else if (!/^\d+$/.test(number)) {
    headline.innerHTML = "<h1>Wrong Parameter</h1>";
  } else {
    getResult(number);
  }
});

async function getResult(number) {
  console.log(number);
  const result = await fetch(`${window.location.href}/cal`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number }),
  })
    .then((response) => response.json())
    .then((data) => renderHeadline(data.result))
    .catch((error) => {
      console.log(error);
    });
}

function renderHeadline(result) {
  console.log(result);
  if (result) {
    headline.innerHTML = `
    <h1>The result is </h1>
    <h1>Index ${result[0]} and ${result[1]}</h1>
    `;
  } else {
    headline.innerHTML = "<h1>Not found</h1>";
  }
}
