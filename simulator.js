let exit = document.getElementById('logo');
exit.addEventListener("click", function(){
    window.location = 'index.html';
});
const autoMTax = 0.0149;
let loanInput = document.getElementById("loanValue");
let qPortionInput = document.getElementById("portionQtd");
let vPortionInput =document.getElementById('value-parc');
let buttonSimulate = document.getElementById('autoSimulate');
let print = document.getElementById("print");
let printTwo = document.getElementById("print2");

buttonSimulate.addEventListener("click", function(event){
  event.preventDefault();
  let loanValue = parseInt(loanInput.value);
  let qPortionValue = parseInt(qPortionInput.value);
  let vPortionValue = parseInt(vPortionInput.value);
  if (loanInput.value === "" && qPortionInput.value === "" && vPortionInput.value === ""){
    alert("Todos os campos estão vazios");
  } else if (loanValue < 3000){
      alert("Nesta modalidade o valor mínimo de empréstimo é de R$ 3.000,00.");
    } 
    if (qPortionInput.value !== "") {
      let powerCalc =(1 - Math.pow(1.0149, -qPortionValue));
      let totalParcelValue = loanValue * (autoMTax/powerCalc);
      let totalLoan = totalParcelValue * qPortionValue;
      if (qPortionValue < 12 || qPortionValue > 60) {
        alert("Você pode escolher pagar de 12 a 60 parcelas, nesta modalidade.");
      }
      print3.innerHTML = totalParcelValue.toFixed();
      print4.innerHTML = totalLoan.toFixed();    
    } 
    if (vPortionInput.value !== "") {
      let numberParCalc = Math.log10((vPortionValue-(autoMTax*loanValue))/vPortionValue)/Math.log10(1 + autoMTax);
      let transformNumber = Math.abs(numberParCalc).toFixed();
      let totalParcelNum = vPortionValue * transformNumber;
      if(transformNumber < 12 || transformNumber > 60) {
        alert("Nesta modalidade você pode pagar entre 12 a 60 parcelas, por favor altere o valor a ser pago por mês.");
      }
      print.innerHTML = transformNumber;
      print2.innerHTML = totalParcelNum;
    }
});


