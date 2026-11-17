// 5. Classificar idade
//Receba uma idade e retorne a faixa: "criança" (0 a 12), "adolescente" (13 a 17), "adulto" (18 a 59) ou "idoso" (60 ou mais).
//Exemplo: 15 → "adolescente"

function classificandoIdade(idade) {

    if (idade <= 12 )     // se a idade for menor ou igual a 12
        return "crianca"; // retorne "crianca" no console


    if (idade <= 17)          // se a idade for menor ou igual a 17
        return "adolescente"; // retorne "adolescente" no console


    if (idade <= 59)     // se a idade for menor ou igual a 59
        return "adulto"; // retorne "adulto" no console


    if (idade >= 60)    // se a idade for menor ou igual a 60
        return "idoso"; // retorne "idoso" no console
}

console.log(classificandoIdade(15))

// como o código é lido de cima para baixo, pensei em fazer dessa forma. Testei e vi que não interferia.