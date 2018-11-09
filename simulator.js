let exit = document.getElementById('logo');
exit.addEventListener("click", function(){
  window.location = 'index.html';
});
const autoMTax = 0.0149;
const consigTax = 0.0274;
const personalTax = 0.0798;
let loanInput = document.getElementById("loanValue");
let qPortionInput = document.getElementById("portionQtd");
let vPortionInput =document.getElementById('value-parc');
let buttonSimulate = document.getElementById('autoSimulate');
let print = document.getElementById("print");
let printTwo = document.getElementById("print2");
buttonSimulate.addEventListener("click", function simulation(event){
  event.preventDefault();
  let loanValue = parseInt(loanInput.value);
  let qPortionValue = parseInt(qPortionInput.value);
  let vPortionValue = parseInt(vPortionInput.value);
  if (loanInput.value === "" && qPortionInput.value === "" && vPortionInput.value === ""){
    alert("Todos os campos estão vazios");
  } else if (loanValue < 3000){
    alert("Nesta modalidade o valor mínimo de empréstimo é de R$ 3.000,00.");
  }
  // formula 1 e 3
  if (qPortionInput.value !== "") {
    let powerCalc =(1 - Math.pow(1.0149, -qPortionValue));
    let totalParcelValue = loanValue * (autoMTax/powerCalc);
    const totalLoan = totalParcelValue * qPortionValue;
    if (qPortionValue < 12 || qPortionValue > 60) {
      alert("Você pode escolher pagar de 12 a 60 parcelas, nesta modalidade.");
      clearAllInputs();
    } else{
      let consigPowerCalc =(1 - Math.pow(1.0274, -qPortionValue));
      let consigTotalParcelValue = loanValue * (consigTax/consigPowerCalc);
      let consigTotalLoan = consigTotalParcelValue * qPortionValue;
      let personalPowerCalc =(1 - Math.pow(1.0798, -qPortionValue));
      let personalTotalParcelValue = loanValue * (personalTax/personalPowerCalc);
      let personalTotalLoan = personalTotalParcelValue * qPortionValue;
      print.innerHTML = totalParcelValue.toFixed();
      print2.innerHTML = totalLoan.toFixed();
      print3.innerHTML = consigTotalParcelValue.toFixed();
      print4.innerHTML = consigTotalLoan.toFixed();
      print5.innerHTML = personalTotalParcelValue.toFixed();
      print6.innerHTML = personalTotalLoan.toFixed();
      var chart = Highcharts.chart('chart', {
        title: {
          text: 'Chart.update'
        },
        subtitle: {
          text: 'Plain'
        },
        xAxis: {
          categories: ['Creditas', 'Crédito Consignado', 'Crédito Pessoal']
        },
        series: [{
          type: 'column',
          colorByPoint: true,
          data: [totalLoan, consigTotalLoan, personalTotalLoan],
          showInLegend: false
        }]
      });
    }
  } 
  // formula 2 e 3
  if (vPortionInput.value !== "") {
    let numberParCalc = Math.log10((vPortionValue-(autoMTax*loanValue))/vPortionValue)/Math.log10(1 + autoMTax);
    let transformNumber = Math.abs(numberParCalc).toFixed();
    let totalParcelNum = vPortionValue * transformNumber;
    if(transformNumber > 275) {
      alert("Nesta modalidade você pode pagar entre 12 a 60 parcelas, por favor altere o valor a ser pago por mês.");
      clearAllInputs();
    } else{
      let consigNumberParCalc = Math.log10((vPortionValue-(consigTax*loanValue))/vPortionValue)/Math.log10(1 + consigTax);
      let consigTransformNumber = Math.abs(consigNumberParCalc).toFixed();
      let consigTotalParcelNum = vPortionValue * consigTransformNumber;
      let personalNumberParCalc = Math.log10((vPortionValue-(personalTax*loanValue))/vPortionValue)/Math.log10(1 + personalTax);
      let personalTransformNumber = Math.abs(personalNumberParCalc).toFixed();
      let personalTotalParcelNum = vPortionValue * personalTransformNumber;
      var chart = Highcharts.chart('chart', {
        title: {
          text: 'Chart.update'
        },
        subtitle: {
          text: 'Plain'
        },
        xAxis: {
          categories: ['Creditas', 'Crédito Consignado', 'Crédito Pessoal']
        },
        series: [{
          type: 'column',
          colorByPoint: true,
          data: [totalParcelNum, consigTotalParcelNum, personalTotalParcelNum],
          showInLegend: false
        }]
      });
      print.innerHTML = transformNumber;
      print2.innerHTML = totalParcelNum;
      print3.innerHTML = consigTransformNumber;
      print4.innerHTML = consigTotalParcelNum;
      print5.innerHTML = personalTransformNumber;
      print6.innerHTML = personalTotalParcelNum;
    }
  }
  clearAllInputs()
});
function somenteNumero() {
  var tecla=(window.event)?event.keyCode:e.which;
  if((tecla>47 && tecla<58)) return true;
  else{
    if (tecla==8 || tecla==0) return true;
else  return false;
  }
}
function clearAllInputs() {
  loanInput.value = "";
    qPortionInput.value = "";
    vPortionInput.value = "";
}
