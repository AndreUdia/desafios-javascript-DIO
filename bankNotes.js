/*Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.
*/

var totalAmount = 576; // let valor = parseInt(gets());

var noteOfHundred = {
  quantity: 0,
  value: 100,
  description: "100,00" 
};
var noteOfFifty = {
  quantity: 0,
  value: 50,
  description: "50,00" 
};
var noteOfTwenty = {
  quantity: 0,
  value: 20,
  description: "20,00" 
};
var noteOfTen = {
  quantity: 0,
  value: 10,
  description: "10,00" 
};
var noteOfFive = {
  quantity: 0,
  value: 5,
  description: "5,00" 
};
var noteOfTwo = {
  quantity: 0,
  value: 2,
  description: "2,00" 
};
var noteOfOne = {
  quantity: 0,
  value: 1,
  description: "1,00" 
};

var bankNotes = [
  noteOfHundred,
  noteOfFifty,
  noteOfTwenty,
  noteOfTen,
  noteOfFive,
  noteOfTwo,
  noteOfOne
];

console.log(totalAmount);

for(let index = 0; index < bankNotes.length; index++) {

    let qtdNote = parseInt(totalAmount / bankNotes[index].value);

    bankNotes[index].quantity += qtdNote;

    totalAmount -= qtdNote * bankNotes[index].value;

    console.log(`${qtdNote} nota(s) de R$ ${bankNotes[index].description}`);
}
