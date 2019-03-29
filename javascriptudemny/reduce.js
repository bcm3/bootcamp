let comidas = [
    {principal: 'Fabada', postre:'yogurt'},
    {principal: 'Fabada2', postre:'yogurt2'},
    {principal: 'Fabada3', postre:'yogurt3'}
    ];


let comida; 

let principales = comidas.reduce(function(contador, comida){
    if(comida.principal === 'Fabadapp'){
        return contador ++;
    }else {
        return contador;
    }
}, true)

console.log(principales);