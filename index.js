"use strict";
let numero = 200;
let segundoNumero = 100;
console.log(numero + segundoNumero);
let idade = 16;
let texto = "Minha idade é: " + idade;
console.log(texto);
let idadeNova = 16;
let textoNovo = "Minha idade é: ";
console.log(textoNovo + idadeNova);
let idadeNova1 = 16;
let textoNovo1 = "Minha idade é: ";
console.log(textoNovo1 + (idadeNova1 + numero));
let verdadeiro = true;
console.log(verdadeiro);
let falso = false;
console.log(falso);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log("Tamanho do array:" + arr.length);
console.log("acessando a posição do array:" + arr[0]);
console.log(arr.indexOf(9));
let arrayTexto;
arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));
function exibirTexto() {
    console.log('Exibindo meu texto');
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro texto";
}
console.log(exibirOutroTexto());
function retornaNumero() {
    return 10;
}
console.log(retornaNumero());
function retornaTexto() {
    return "retornando string";
}
console.log(retornaTexto());
function soma(a, b) {
    return a + b;
}
console.log("O valor da soma é:" + soma(50, 100));
function multiplicar(a, b) {
    return a * b;
}
console.log("O valor da multiplicação é:" + multiplicar(50, 100));
function formula(a, b, c) {
    return (a + b) * c;
}
console.log("O resultado da formula é:" + formula(1, 2, 3));
function multiplicação(a, b) {
    return "O resultado da multiplicação é: " + (a * b);
}
console.log(multiplicação(5, 2));
