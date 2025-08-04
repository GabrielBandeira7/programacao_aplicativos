const prompt = requese('prompt-sync')();

let salario = [];
let somatoria = 0;
let media;

for(i = 0; i < 2;i ++){
    let salario;
    salario = Number(prompt("Digite o salario do funcionario: "));

    samatoria += salario;

    salario.push(salario);

    console.log(`A folha de pagamento é de: R$ ${somatoria.toFixed(2)}`);
    console.log(`A média salarial é de ${(salario / salarios.lenght).toFixed(2)}`);
}