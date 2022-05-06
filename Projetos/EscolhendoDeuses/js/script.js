

let p = document.getElementsByClassName("deuses")[0]
var deuses = ["Aegirv", "Aud", "Balder", "Thor", "Bragi", "Dag"];
let dLen = deuses.length;

let lista = "<ul>"

for (i in deuses) {
    lista += "<li>" + deuses[i] + "</li>";
}

lista += "</ul>";

p.innerHTML = lista