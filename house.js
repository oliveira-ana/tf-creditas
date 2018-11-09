const exit = document.getElementById('logo');
exit.addEventListener("click", function(){
    window.location = 'index.html';
});
const houseMTax = 0.0115;
let loanInput = document.getElementById("loanValue");
let qPortionInput = document.getElementById("portionQtd");
let vPortionInput =document.getElementById('value-parc');
let buttonSimulate = document.getElementById('autoSimulate');
let print = document.getElementById("print");
let print2 = document.getElementById("print2");

buttonSimulate.addEventListener("click", function(event){
  event.preventDefault();
  let loanValue = parseInt(loanInput.value);
  let qPortionValue = parseInt(qPortionInput.value);
  let vPortionValue = parseInt(vPortionInput.value);
  if (loanInput.value === "" && qPortionInput.value === "" && vPortionInput.value === ""){
    alert("Todos os campos estão vazios");
  } else if (loanValue < 30000){
      alert("Nesta modalidade o valor mínimo de empréstimo é de R$ 30.000,00.");
    }
    // formula 1
    if (vPortionInput.value !== "") {
      
      let numberParCalc = Math.log10((vPortionValue-(houseMTax*loanValue))/vPortionValue)/Math.log10(1 + houseMTax);
      let transformNumber = Math.abs(numberParCalc).toFixed();
      let totalParcelNum = vPortionValue * transformNumber;
      if(transformNumber < 60 || transformNumber > 240) {
        alert("Nesta modalidade você pode pagar entre 60 a 240 parcelas, por favor altere o valor a ser pago por mês.");
      }
      print.innerHTML = transformNumber;
      print2.innerHTML = totalParcelNum;
    }
      // formula 2 
    if (qPortionInput.value !== "") {
      console.log("oi");
      let powerCalc =(1 - Math.pow(1.0115, -qPortionValue));
      let totalParcelValue = loanValue * (houseMTax/powerCalc);
      let totalLoan = totalParcelValue * qPortionValue;
      if (qPortionValue < 60 || qPortionValue > 240) {
        alert("Você pode escolher pagar de 60 a 240 parcelas, nesta modalidade.");
      }
      print.innerHTML = totalParcelValue.toFixed();
      print2.innerHTML = totalLoan.toFixed();    
     } 
    
    




});

// let exit2 = document.getElementById('logo');
// exit2.addEventListener("click", function(){
//     window.location = 'index.html';
// });
// let loanInput = document.getElementById("loanValue");
// let qPortionInput = document.getElementById("portionQtd");
// let vPortionInput =document.getElementById('value-parc');
// let buttonSimulate = document.getElementById('autoSimulate');
// let print = document.getElementById("print");
// let printTwo = document.getElementById("print2");
// let autoMTax = 0.0115;
// buttonSimulate.addEventListener("click", function(event){
//   event.preventDefault();
//   somenteNumero();
//   let loanValue = parseInt(loanInput.value);
//   let qPortionValue = parseInt(qPortionInput.value);
//   let vPortionValue = parseInt(vPortionInput.value);
//   let numberParCalc = Math.log10((vPortionValue-(autoMTax*loanValue))/vPortionValue)/Math.log10(1 + autoMTax);
//   let transformNumber = Math.abs(numberParCalc).toFixed();
//   let totalParcelNum = vPortionValue * transformNumber;
//   let powerCalc =(1 - Math.pow(1.0115, -qPortionValue));
//   let totalParcelValue = loanValue * (autoMTax/powerCalc);
//   let totalLoan = totalParcelValue * qPortionValue;
//     if (loanValue < 30000){
//       alert("Nesta modalidade o valor mínimo de empréstimo é de R$ 30.000,00.");
//     }

//     if (qPortionValue < 60 || qPortionValue > 240) {
//       alert("Você pode escolher pagar de 60 a 240 parcelas, nesta modalidade.");
//     }

//     if (transformNumber < 60 || transformNumber > 240) {
//       alert("Nesta modalidade você pode pagar entre 60 a 240 parcelas, por favor altere o valor a ser pago por mês.");
//     }
//   print.innerHTML = transformNumber;
//   print2.innerHTML = totalParcelNum;
//   print3.innerHTML = totalParcelValue.toFixed();
//   print4.innerHTML = totalLoan.toFixed();    

// });

// function somenteNumero() {
//   let input = document.getElementById('loanValue');
//     if (input !== ""){
//       if (isNaN(input)){
//         alert("Insira somente números!");
//         return;
//       }
//     }

// }