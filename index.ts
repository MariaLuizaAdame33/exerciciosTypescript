let numero: number = 200;
let segundoNumero: number = 100;

console.log(numero + segundoNumero)

let idade: number = 16;
let texto: string = "Minha idade é: " + idade;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "Minha idade é: ";

console.log(textoNovo + idadeNova);

let idadeNova1: number = 16;
let textoNovo1: string = "Minha idade é: ";

console.log(textoNovo1 + (idadeNova1 + numero));

let verdadeiro: boolean = true;
console.log(verdadeiro);

let falso: boolean = false;
console.log(falso);

let arr: number[] = [1,2,3,4,5,6,7,8,9];
console.log(arr)
console.log("Tamanho do array:" + arr.length);
console.log("acessando a posição do array:" + arr[0]);
console.log(arr.indexOf(9))

let arrayTexto: Array<string>;

arrayTexto = ['ab','bc','cd','de'];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro texto"
}

console.log(exibirOutroTexto());

function retornaNumero(){
    return 10;
}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string" ;
}

console.log(retornaTexto());

function soma(a:number, b:number): number{
    return a + b;
}

console.log("O valor da soma é:" + soma(50,100));



function multiplicar(a:number, b:number): number{
    return a * b;
}

console.log("O valor da multiplicação é:" + multiplicar(50,100));

function formula(a:number, b:number, c:number): number{
    return (a + b) * c;
}

console.log("O resultado da formula é:" + formula(1,2,3));

function multiplicação(a:number, b:number): string{
    return "O resultado da multiplicação é: " + (a*b);
}

console.log(multiplicação(5,2));





