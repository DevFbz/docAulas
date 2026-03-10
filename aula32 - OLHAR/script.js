const getTarefa = document.querySelector("#itarefa");
const addButton = document.querySelector(".addButton");
const lista = document.querySelector(".lista-tarefas");

function criarLi() {
  const li = document.createElement("li");

  return li;
}

getTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault;
    if (!getTarefa.value) return;
    criarTarefa(getTarefa.value);
  }
});

document.addEventListener("click", function (e) {
  const element = e.target;
  if (element.classList.contains("apagar")) {
    element.parentElement.remove();
    salvarTarefas();
  }
});

function criarButton(li) {
  const criarButton = document.createElement("button");
  criarButton.innerHTML = "apagar";

  criarButton.setAttribute("class", "apagar distancia");
  li.appendChild(criarButton);
}

function criarTarefa(texto) {
  const li = criarLi();
  li.innerHTML = texto;
  lista.appendChild(li);
  apagarInput();
  criarButton(li);
  salvarTarefas();
}

function apagarInput() {
  getTarefa.value = "";
  getTarefa.focus();
}

addButton.addEventListener("click", function (event) {
  event.preventDefault;
  if (!getTarefa.value) return;
  criarTarefa(getTarefa.value);
  apagarInput();
});

function salvarTarefas() {
  const liTarefas = lista.querySelectorAll("li");
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '');
    listaTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefas(){
  const tarefas = localStorage.getItem('tarefas')
  const listadeTarefas = JSON.parse(tarefas)

  for(let tarefa of listadeTarefas){
    criarTarefa(tarefa)
  }
}
addTarefas()
