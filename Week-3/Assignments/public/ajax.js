const form = document.querySelector("#form");
const headline = document.querySelector("#headline");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let number = document.querySelector("#number").value;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.responseText);

      if (obj.valid) {
        headline.innerHTML = `
          <h1>The result is </h1>
          <h1 class="huge">${obj.value}</h1>`;
      } else {
        headline.innerHTML = `
          <h1>${obj.message}</h1>
        `;
      }
    }
  };
  xhr.open("GET", `/data?number=${number}`);
  xhr.send();
});
