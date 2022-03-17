function maior(num, num2){
   return num > num2 ? num: num2;
}
function fizzBuzz(num){
    if (typeof num !== 'number')
        return 'Nao e um numero'
    if (num % 3 === 0 && num % 5 === 0)
        return 'FizzBuzz'
    else if (num % 3 === 0 || num % 5 === 0)
        return num % 3 === 0 ? "Fizz" :"Buzz";
    return num;
}
function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const contador = Math.floor((velocidade - 70)/5);
    if (velocidade > velocidadeMaxima){
        if (contador >= 12){
            return console.log("Carteira Suspensa");
        }
        return console.log("Pontos:", contador);
    }
    return console.log('ok');
}
function exibirTipo(num) {
    for (let i = 0;i <= num; i++)
            console.log(i % 2 === 0 ? i + '"PAR"': i + '"IMPAR"');
}
function exibirPropriedades(objetos){
    for (obj in objetos){
        if(typeof objetos[obj] === 'string')
            console.log(obj ,'=', objetos[obj]);
    }
}
// somar multiplos de 3 e 5
function somar(limite){
    const multiplos3 = 3;
    const multiplos5 = 5;
    let soma = 0;
    for(let i = 0; i <= limite; i++){
        soma += i % multiplos3 === 0 ? + i: i % multiplos5 === 0 ? + i:0;
    }
    console.log(soma)
}
const filme = {
    titulo: "Vingadores",
    ano: 1994,
    personagem: "Thor",
    qualidade: "Boa",
};

somar(10)
//exibirPropriedades(filme)