function render(data) {
  const form = document.getElementById("form");
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

    form.append(table);
  }
}

function clearFrom() {
  const table = document.querySelector("table");
  if (table) table.remove();
}

async function getArticles(username, lower, upper) {
  const res = await fetch("/getArticlesByUserAndId", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, lower, upper }),
  });
  const data = await res.json();
  render(data);
}

getArticles();

const submit = document.querySelector("#submit");
submit.addEventListener("click", async (e) => {
  e.preventDefault();
  clearFrom();
  const username = document.getElementById("username").value;
  const lower = document.getElementById("lower").value;
  const upper = document.getElementById("upper").value;
  getArticles(
    username === "" ? undefined : username,
    isNaN(parseInt(lower)) ? undefined : lower,
    isNaN(parseInt(upper)) ? undefined : upper
  );
});
