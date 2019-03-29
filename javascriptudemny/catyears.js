let myAge = 28;

let earlyYEars = 2;

earlyYEars *=25;

let laterYears = myAge -2

laterYears *= 4

let myName = "Borja";

console.log("My name is" +myName+ "I am " +myAge+ " years old in human years which is "+earlyYEars+ " years old in cat years.");


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
console.log(arrayC)

arrayC.forEach(function(item, index, arrayC) {
    console.log(item, index);
  });