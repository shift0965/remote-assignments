async function ajax(src, callback) {
  try {
    const response = await fetch(src);
    const data = await response.json();
    callback(data);
  } catch (err) {
    console.log(err);
  }
}

function render(data) {
  const headline = document.querySelector("#headline");
  if (data) {
    const table = document.createElement("table");
    const header = table.createTHead();

    const keys = ["name", "price", "description"];

    keys.forEach((key) => {
      let th = document.createElement("th");
      th.innerHTML = key;
      header.appendChild(th);
    });

    data.forEach((product) => {
      let tr = document.createElement("tr");
      keys.forEach((key) => {
        let td = document.createElement("td");
        td.innerHTML = product[key];
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });

    headline.appendChild(table);
    document.querySelector("#submit").remove();
  } else {
    headline.innerHTML = "Connection failed";
  }
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  ajax(
    "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
    function (response) {
      render(response);
    }
  );
});
