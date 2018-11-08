let exit = document.getElementById('logo');
exit.addEventListener("click", function(){
    window.location = 'index.html';
});

let loanInput = document.getElementById("loanValue");
let portionInput = document.getElementById("portionQtd");
let autoSimulate = document.getElementById('autoSimulate');
let print = document.getElementById("print");
let printTwo = document.getElementById("print2");
    
autoSimulate.addEventListener("click", function(event){
    event.preventDefault();
    let loanValue = loanInput.value;
let portionQtd = portionInput.value;        

    let portionValue = loanValue / portionQtd;
    let totalLoan = portionQtd * portionValue;
    print.innerHTML = portionValue;
    printTwo.innerHTML = totalLoan;
});

 function logSec() {
      valorSolicitado = document.getElementById("loanValue"),
      valorParcelas = document.getElementById("value-parc"),
      taxaMensal = 0.0149, //ao mês
      equalParc = Math.log10((valorParcelas-(taxaMensal*valorSolicitado))/valorParcelas)/Math.log10(1 + taxaMensal),
      
  
    console.log(secEquation);
  }
  //      valorDaParcela = equacao * valorFinanciado;
