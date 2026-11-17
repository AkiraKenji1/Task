//1. Soma de 1 até N
//Receba um número n e retorne a soma de todos os números de 1 até n.
//Exemplo: 5 → 15 (1+2+3+4+5)

function somarAteN(n) { //função para somar até um determinado numero
    let soma = 0; // variavel inicial, somando os numeros a partir dela

    for (let i = 1; i <= n; i++) { // fazendo a soma
        soma = soma + i; // somando desde a variavel inicial até o numero final
    }

    return soma; // retornando em soma
}

console.log(somarAteN(6)); // escolhendo qual numero quero somar e colocando no log
