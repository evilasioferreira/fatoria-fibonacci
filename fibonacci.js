// Entrada do usuário
const numero = parseInt(prompt("Digite um número inteiro positivo:"));


let fatorial = 1;
let fibonacci = [0, 1];


for (let i = 2; i <= numero; i++) {
  fatorial *= i;
}


for (let i = 2; i <= numero; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log("Fatorial de", numero, ":", fatorial);
console.log("Sequência de Fibonacci até", numero, ":", fibonacci);