const disciplina = [
  { nome: "WEB", cargaHoraria: 60, professor: "John" }
];

disciplina[0].periodo = 2;
disciplina[0].cargaHoraria = 80;
const disciplinaJSON = JSON.stringify(disciplina);
const recuperarDisciplina = JSON.parse(disciplinaJSON);
console.log(recuperarDisciplina);

const encontrarPrimeiro = disciplina.find(disciplina => disciplina.nome === "WEB");
console.log(encontrarPrimeiro);
console.log(encontrarPrimeiro.nome)