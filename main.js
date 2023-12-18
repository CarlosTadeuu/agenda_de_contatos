const form = document.getElementById("my_form");

const contactsName = [];
const contactsTel = [];
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarContatos();
  atualizaTabela();
});
function salvarContato(name, telefone) {
  contactsName.push(name.value);
  contactsTel.push(telefone.value);
}
function adicionarContatos() {
  const name = document.getElementById("nameContact");
  const telefone = document.getElementById("telContact");

  if (contactsName.includes(name.value)) {
    alert(`Contato ${name.value} já existe`);
  } else {
    salvarContato(name, telefone);

    let linha = "<tr>";
    linha += `<td>${name.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }
  name.value = "";
  telefone.value = "";
}
function atualizaTabela() {
  const bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = linhas;
}
