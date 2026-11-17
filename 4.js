//4. Contar até encontrar
//Dado um array de números, conte quantos deles são maiores que 10.
//Exemplo: [5, 12, 8, 20, 15] → 3

function contandoMaioresQueDez(array) {
    let MaiorQueDez = 0; // variavel que conta quantos números maiores que "10" existem (começando depois do 0)

    for (const numero of array) { // filtrando o array e contando quantos números são maiores que 10
        if (numero > 10) { // se o número for maior que 10
            MaiorQueDez++; // adicione +1 a contagem
        }
    }

    return MaiorQueDez; // retorna o número
}

console.log(contandoMaioresQueDez([5, 12, 8, 20, 15])); 

