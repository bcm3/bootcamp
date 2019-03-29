let nombreUser = prompt("Dame tu nombre \n");

if (nombreUser) {
    console.log('Hola, ' + nombreUser + '.');
} else {
    console.log('Hooolaa!');
}


let userPregunta = prompt("Lanza una pregunta \n");

let aleatoria = Math.floor(Math.random() * 7);
console.log(aleatoria);

let texto = '';


switch (aleatoria) {

    case 0:
        texto = 'Es cierto';
        break;
    case 1:
        texto = 'Es decididamente así';
        break;
    case 2:
        texto = 'Debes confiar en ello';
        break;
    case 3:
        texto = 'Puede ser';
        break;
    case 4:
        texto = 'Pregunta en otro momento';
        break;
    case 5:
        texto = 'Definamente NO';
        break;
    case 6:
        texto = 'Mis fuentes me dicen que no';
        break;
    case 7:
        texto = 'SMuy dudoso';
        break;
}

console.log("Mira " + nombreUser + 'Tu respuesta: ' + texto);
