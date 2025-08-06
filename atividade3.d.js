const prompt = requese('prompt-sync')();

let totalPessoas = parseInt(prompt("Quantas pessoas deseja cadastrar?"));

let pessoaMaisVelha = { nome: "", idade: -Infinity };
let pessoaMaisJovem = { nome: "", idade: Infinity };

for (let i = 0; i < totalPessoas; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    let idade = parseInt(prompt(`Digite a idade de ${nome}:`));

    if (idade > pessoaMaisVelha.idade) {
        pessoaMaisVelha.nome = nome;
        pessoaMaisVelha.idade = idade;
    }

    if (idade < pessoaMaisJovem.idade) {
        pessoaMaisJovem.nome = nome;
        pessoaMaisJovem.idade = idade;
    }
}

console.log(`Pessoa mais velha: ${pessoaMaisVelha.nome}, ${pessoaMaisVelha.idade} anos`);
console.log(`Pessoa mais jovem: ${pessoaMaisJovem.nome}, ${pessoaMaisJovem.idade} anos`);
