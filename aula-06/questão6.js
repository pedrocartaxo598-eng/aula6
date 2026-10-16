const nomeCompleto = [" Maria Clara Souza ", "JOAO LIMA"];

const gerarUsuario = (nomeCompleto) =>
{
  return nomeCompleto.map(nome => 
    nome.trim()
        .toLowerCase()
        .split(" ")
        .join(".")
  );
};

console.log(gerarUsuario(nomeCompleto));