function aplicarOperacao(a, b, operacao){
    return operacao(a,b);
};

function soma(a, b){
    return a + b;
};

function multiplicacao(a, b){
    return a * b;
};

console.log(aplicarOperacao(8, 2, soma));
console.log(aplicarOperacao(8, 2, multiplicacao));
console.log(aplicarOperacao(8, 2, (a,b) => a-b));