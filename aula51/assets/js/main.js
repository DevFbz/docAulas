// fetch("pessoas.json")
//   .then((resposta) => resposta.json())
//   .then((json) => carregarElementosJson(json));

axios("pessoas.json").then(reposta => carregarElementosJson(reposta.data));

function carregarElementosJson(json) {
  const table = document.createElement("table");
  for (let pessoas of json) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");

    td.innerHTML = pessoas.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoas.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoas.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const result = document.querySelector(".resultado");

  result.appendChild(table);
}
