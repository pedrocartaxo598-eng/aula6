const alunos = [
    {nome:"Ana",media:8.5},
    {nome:"Bruno",media:6},
    {nome:"Carla",media:9},
    {nome:"Davi",media:5.5}
];


console.log(alunos.find(aluno => aluno.media < 7).nome);
console.log(alunos.some(alunos => alunos.media === 9))
console.log(alunos.every( alunos => alunos.media > 7))
