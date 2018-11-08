let exit = document.getElementById('logo');
exit.addEventListener("click", function(){
    window.location = 'index.html';
});

let loanInput = document.getElementById("loanValue");
let portionInput = document.getElementById("portionQtd");
let autoSimulate = document.getElementById('autoSimulate');
let valueParc =document.getElementById('value-parc');
let print = document.getElementById("print");
let printTwo = document.getElementById("print2");
let taxaMensal = 0.0149;

    
autoSimulate.addEventListener("click", function(event){
    event.preventDefault();
    let loanValue = parseInt(loanInput.value);
    let portionQtd = parseInt(portionInput.value);        
    let valueParc2 = parseInt(valueParc.value);
    let portionValue = parseInt(loanValue / portionQtd);
    let totalLoan = parseInt(portionQtd * portionValue);
    let numberParc = Math.log10((valueParc2-(taxaMensal*loanValue))/valueParc2)/Math.log10(1 + taxaMensal);
    let transformNumber = Math.abs(numberParc).toFixed();
    let loanTax = (loanValue*taxaMensal)+loanValue;
    console.log(transformNumber);
    print.innerHTML = transformNumber;
    print2.innerHTML = loanTax;
});
