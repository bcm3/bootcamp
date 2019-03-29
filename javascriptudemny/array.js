let cochesArray = ['AUDI','SEAT','VW','MAZDA']

cochesArray.shift()

console.log(cochesArray);

cochesArray.push("Mercedes","Renault");

console.log(cochesArray);
cochesArray.sort();
console.log(cochesArray);

cochesArray.forEach(function(item, index, cochesArray) {
    console.log(item, index);
  });

let cestaCompra = ['Naranjas','Tomates','Peras','Limones']
cestaCompra.sort(); //ordeno
cestaCompra.pop(); //elimono inicio
cestaCompra.push('Pepino'); //añado final
console.log(cestaCompra);

let coches = cochesArray.slice(0,3); //nuevo array con 3 elementos
console.log(coches)

var arrayC = cestaCompra.concat(coches); //concatenacion de los dos arrays
console.log(arrayC);

arrayC.sort();
console.log(arrayC);
arrayC.reverse(); //ivierte el orden de lo elementos
console.log("Rever0" +arrayC)

//recorrer array y sacar su indice
arrayC.forEach(function(item, index, arrayC) {
    console.log(item, index);
  });

let tiempo = ['sol','nieve','lluvia','niebla','humedo','calor'];
let verano = tiempo.slice(0.5);
let invierno = ['nieve','lluvia','niebla'];

console.log(verano);

//array 
var nombre = ['Borja','Pepe','Luisa','Marta','Juana'];
nombre.splice(-4,3);
console.log(nombre);
//nombre.shift //elimina el primer elemento
//nombre.unshift //añade elementos al inicio

//let nombres = nombre.

var colores = ['ROJO','NARANJA','AMARILLO','VERDE','AZUL','INDIGO','AZUL'];

colores.slice(3,7);
console.log(colores);