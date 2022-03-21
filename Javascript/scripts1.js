function Carro(marcaCarro , motorCarro, velocidadeMaxima){
    this.marcaCarro = marcaCarro,
    this.motorCarro = motorCarro,
    this.velocidadeMaxima = velocidadeMaxima,
    this.ligar = function (){
        console.log("acelerando o carro")},
    this.acelerando = function () {
        console.log("acelerando");
    }
}
carroFerrari = new Carro("ferrari","V8",320);
console.log(carroFerrari);
carroFerrari.ligar();
carroFerrari.acelerando();