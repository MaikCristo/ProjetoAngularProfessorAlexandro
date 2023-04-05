let list = ["1", "9", "3", "4", "5", "6", "7", "8", "9"];
let buscarPor = ("9");
let indice = list.indexOf(buscarPor);
let resp = document.getElementById("resultado");

while(indice >= 0){
    list.splice(indice, 1);
    indice = list.indexOf(buscarPor);

}
console.log(list);
resp.innerHTML = list;