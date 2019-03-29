let randomBodyParts = ['CABEZA','BRAZOS','MUÑECA','CUELLO'];
let randomAdjectives = ['ROTO','CORTO','LARGO','BONITO'];
let ramdomWords = ['Azul','Perro','Monitor','Ladrillo'];
let randomNames =  ['John', 'Sally', 'Alex'];

//math -> devuelve el max entero menor o igual a un numero
let randomName = randomNames[Math.floor(Math.random() * 4)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

let randomWord = ramdomWords[Math.floor(Math.random() * 4)];

console.log("Tu " +randomBodyParts + "es tan bonito como " + randomAdjective + randomWord + "!!!")

function goodMorningVecino(){
    return 'Buenos dias, guaje ';
}

console.log(goodMorningVecino())

function goodMorningVecino(name){
    return 'Buenos dias, guaje ' + name;
}

console.log(goodMorningVecino('Borja'))

//cosas jajaj

let numeroA = 5;

function sumaNumero(){
    let numeroB = 5;
    let numeroC = 10;
    let numeros = function(){
        return numeroB + numeroC - numeroA;
    }
    //retorno la funcion
    return numeros();
}

console.log(sumaNumero());

