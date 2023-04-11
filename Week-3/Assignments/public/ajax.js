const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let number = document.querySelector("#number").value;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", `/data?number=${number}`);
  xhr.send();
});
