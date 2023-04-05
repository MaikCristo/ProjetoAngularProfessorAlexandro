function calculos(){
  console.log("Sequencia em For")
  let num = parseInt(document.getElementById("numero").value);
  let resp = document.querySelector('ul');

  for (let i = 1; i <= num; i++) {
    console.log(i);
    let respNovo = document.createElement("li"); //para criar um novo elemento
    respNovo.textContent= i; // imprimir resultado
    resp.appendChild(respNovo); // adicionará elementos

  }

  //Aqui começamos o laço while
  console.log("Sequencia em While")
  let p = 1;
  let num2 = parseInt(document.getElementById("numero").value);
  let resp2 = document.getElementById("ulWhile");

  while (p <= num2) {
    console.log(p);
    let respNovo2 = document.createElement("li"); //para criar um novo elemento
    respNovo2.textContent= p; // imprimir resultado
    resp2.appendChild(respNovo2); // adicionará elementos
    p++;
  }
}

