let numeros = [];
let numero;

do {
    numero = parseFloat(prompt("Digite um número (0 para encerrar):"));
    if (numero !== 0) {
        numeros.push(numero);
    }
} while (numero !== 0);

if (numeros.length > 0) {
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let soma = numeros.reduce((acc, val) => acc + val, 0);
    let media = soma / numeros.length;

    alert(`Maior número: ${maior}`);
    alert(`Menor número: ${menor}`);
    alert(`Média aritmética: ${media.toFixed(2)}`);
} else {
    alert("Nenhum número foi inserido.");
}
