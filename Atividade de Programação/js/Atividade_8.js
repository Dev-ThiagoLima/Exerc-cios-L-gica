var quant_CDs = parseInt(prompt("Quantos CDs: "))
document.write("<br>Quantidade de CDs na coleção é " + quant_CDs);
var soma_valor = 0.00

for (var i = 1; i <= quant_CDs; i++) {
    var valor_CDs = parseFloat(prompt("Valor do "+i+"° CD: "));

    document.write("<br>O " + i + "° CD vale R$" + valor_CDs);
    soma_valor += valor_CDs
}
resultado_media = soma_valor/quant_CDs
document.write("<br>Total da coleção R$"+soma_valor);
document.write("<br>Media total da coleção: R$"+resultado_media);





