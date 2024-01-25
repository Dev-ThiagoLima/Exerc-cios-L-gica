
var soma = 0
var soma_total = 0
var quant_turma = parseInt(prompt("Quantidade de turmas: "))

for(var i = 1; i <= quant_turma; i++){
    var quant_aluno = parseInt(prompt("Quantidade de alunos na "+i+"° turma: "));
    
    if (quant_aluno > 40){
        alert("Não é permitido mais que 40 alunos por turma");
        i--
    }
    else{
        soma += quant_aluno;
        soma_total += quant_aluno;
    }    
}
var resultado_media = soma_total/quant_turma
document.write("<br>O número médio de alunos por turma é "+resultado_media);