//2. Pares até N
//Receba um número n e imprima todos os números pares de 1 até n.
//Exemplo: 10 → 2, 4, 6, 8, 10


function parAteAlgum(n) { // função para classificar os pares

    for (let i = 1; i <= n; i++) { // vai de 1 até um determinado numero

        if (i % 2 === 0) { // verifica se é par 

            console.log(i); // faz aparecer no log os numeros pares

        }
    }
}

parAteAlgum(10);