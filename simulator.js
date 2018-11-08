let exit = document.getElementById('logo');
exit.addEventListener("click", function(){
    window.location = 'index.html';
});
let loanInput = document.getElementById("loanValue");
let qPortionInput = document.getElementById("portionQtd");
let vPortionInput =document.getElementById('value-parc');
let buttonSimulate = document.getElementById('autoSimulate');
let print = document.getElementById("print");
let printTwo = document.getElementById("print2");
let autoMTax = 0.0149;
let houseMTax = 0.0115;
buttonSimulate.addEventListener("click", function(event){
  event.preventDefault();
  let loanValue = parseInt(loanInput.value);
  let qPortionValue = parseInt(qPortionInput.value);        
  let vPortionValue = parseInt(vPortionInput.value);
  let numberParCalc = Math.log10((vPortionValue-(autoMTax*loanValue))/vPortionValue)/Math.log10(1 + autoMTax);
  let transformNumber = Math.abs(numberParCalc).toFixed();
  let totalParcelNum = vPortionValue * transformNumber;
  let powerCalc =(1 - Math.pow(1.0149, -qPortionValue));
  let totalParcelValue = loanValue * (autoMTax/powerCalc);
  let totalLoan = totalParcelValue * qPortionValue;
  print.innerHTML = transformNumber;
  print2.innerHTML = totalParcelNum;
  print3.innerHTML = totalParcelValue.toFixed();
  print4.innerHTML = totalLoan.toFixed();    

});
