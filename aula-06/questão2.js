const funcionarios = [
    {nome:"Lia", setor:"TI"},
    {nome:"Rui", setor:"RH"},
    {nome:"Ana", setor:"TI"},
    {nome:"Caio", setor:"Vendas"}
];

const nomesTI = funcionarios
.filter(funcionarios => funcionarios.setor === "TI")
.map(funcionarios => funcionarios.nome);

console.log(nomesTI);
console.log(funcionarios.length);
