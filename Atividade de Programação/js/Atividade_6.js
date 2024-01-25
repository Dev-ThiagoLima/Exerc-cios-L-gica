
var contador = 0
var numero_par = 0
var numero_impar = 0


while (contador < 10) {
    contador += 1
    var numero = parseInt(prompt("Digite o " + contador + "° numero inteiro:"))
    var resultado = (numero % 2)

    if (resultado == 0) {
        (numero_par += 1)
    }

    else {
        numero_impar += 1
    }

}
document.write("<br> Quantidade de numero impar é : " + numero_impar);

document.write("<br>Quantidade de numero par é : " + numero_par);