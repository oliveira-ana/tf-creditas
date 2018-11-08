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

