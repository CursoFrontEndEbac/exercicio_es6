"use strict";

var alunos = [{
  nome: "Marcelo",
  nota: 10
}, {
  nome: "Julia",
  nota: 7
}, {
  nome: "Natalia",
  nota: 5
}, {
  nome: "Cecilia",
  nota: 6
}, {
  nome: "Inacio",
  nota: 9
}, {
  nome: "Joao",
  nota: 4
}];
function alunosNota(arrayAlunos) {
  // percorre  o arrray alunos 
  return arrayAlunos.filter(function (aluno) {
    // filtra os alunos com a regra da nota
    return aluno.nota >= 6;
  });
}
var passaram = alunosNota(alunos); //criamos  uma variavel passaram pra  colocar a nota dos alunos
console.log(passaram); // lendo a variavel passaram com as notas