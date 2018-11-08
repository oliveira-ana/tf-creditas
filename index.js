let secEquation = function () {
  let valorSolicitado = document.getElementById("valor-solicitado").parseInt().parseFloat();
    valorParcelas = document.getElementById("v-parcelas").parseInt;
      taxaMensal = 0.0149, //ao mês
        equacao = Math.log10((valorParcelas-(taxaMensal*valorSolicitado))/valorParcelas)/Math.log10(1 + taxaMensal);
      numeroParcelas = equacao;
    console.log(equacao);
    // valorDaParcela = equacao * valorFinanciado;

  
}

secEquation();



let exit = document.getElementById('logo');

exit.addEventListener("click", function(){
    window.location = 'index.html';
});
