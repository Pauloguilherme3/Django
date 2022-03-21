let faixa = [5,10,50,25,30,100,150];
let ordenada = []
function faixaDePreco(faixa){
    let cont = faixa.length
    for(let i = 0; i < cont;i++){
        let x = 0;
        for(valor in faixa){
            if (faixa[valor] > x === !(faixa[valor] in ordenada)){
                x = faixa[valor];
            }
        }
        ordenada.push(x);
        faixa.splice(faixa.indexOf(x),1);
        
    }
    return console.log(ordenada.reverse());
}
faixaDePreco(faixa);