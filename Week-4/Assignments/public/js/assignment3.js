function render(data) {
  const headline = document.querySelector("#headline");
  if (data) {
    const table = document.createElement("table");
    const header = table.createTHead();

    const keys = ["id", "username", "email", "content"];

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
submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("/getArticles");
  const data = await res.json();
  render(data);
});
