const alunos = [
    {nome:"ana",media:8.5},
    {nome:"bruno",media:6},
    {nome:"carla",media:7.5},
    {nome:"davi",media:9}
];

const listarAprovados = alunos
.filter(aluno => aluno.media >= 8)
.map(aluno => aluno.nome.toUpperCase());

console.log(listarAprovados);