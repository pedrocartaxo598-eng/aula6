const recebido = {
    produto: "Monitor",
    preco: 900,
    estoque: 4
};

const recebidoJSON = JSON.stringify(recebido);
const voltaJSON = JSON.parse(recebidoJSON);

voltaJSON.preco -= (voltaJSON.preco *0.10);
voltaJSON.estoque -= 1;

const novamenteJSON = JSON.stringify(voltaJSON);
console.log(novamenteJSON);