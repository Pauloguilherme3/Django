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
exibirTipo(5)