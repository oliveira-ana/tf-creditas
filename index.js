let secEquation = function (valor=3000) {
  let valorSolicitado = document.getElementById(""),
    numeroParcelas = document.getElementById(""),
    valorParcelas = document.getElementById(""),
    taxaMensal = 0.0149, //ao mês
    equacao = Math.log10((valorParcelas-(taxaMensal*valorSolicitado))/valorParcelas)/Math.log10(1 + taxaMensal),
    valorDaParcela = equacao * valorFinanciado;

  console.log(secEquation);
}

