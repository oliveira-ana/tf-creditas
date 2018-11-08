let simulateBtn = document.getElementById('btn');

simulateBtn.addEventListener("click", function(){
    window.location = 'simulator.html'
});




let loanValue = document.getElementById("InputLoanValue");
let portionQtd = document.getElementById("portionNumId");
let portionValue = loanValue / portionQtd;
let totalLoan = portionQtd * portionValue;

