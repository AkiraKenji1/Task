// 3. Média de três notas
// Receba três notas, calcule a média e diga se o aluno foi "aprovado" (média maior ou igual a 7) ou "reprovado".
// Exemplo: 8, 6, 7 → 7, "aprovado"


function calcularMedia(nota1,nota2,nota3) { // função que guarda as notas que foram colocadas

    // Dentro dessa função tem um "filtro" que retorna um resultado entre "aprovado" e "reprovado"
    
 
    let media = (nota1 + nota2 + nota3) / 3; // calcula a média das notas
   

    if (media >= 7) {
        return { media: media, status: "aprovado" }; // se a media for 7 ou mais "APROVADO"

    } else {
        return { media: media, status: "reprovado" }; // caso contrário "REPROVADO"
    }
}

console.log(calcularMedia(8, 6, 7));