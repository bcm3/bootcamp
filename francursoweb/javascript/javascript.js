alert("Hola Mundo");
function mostrarholamundo(){
  alert("Hola Mundo Función");
}
mostrarholamundo(); //llamada a la función
numero1=5;
numero2=6;
alert(numero1+numero2);
//var variable local

var numeroa=2;
var numerob=1;
function sumar(numeroa,numerob){
  alert("Resultado de la suma es :" + (numeroa + numerob));
}

function restar(numeroa,numerob){
  alert("Resultado de la resta es:"+(numeroa-numerob));
}

function multiplicar(numeroa,numerob){
  alert("Resultado de la multiplicacion es:"+(numeroa*numerob));
}

function comprueba(){
  if(numeroa>numerob)
    alert("El numero"+(numeroa) + "es mayor que" +(numerob));
    else
    alert("El numero"+(numeroa) + "es menor que" +(numerob));
}

sumar(numeroa,numerob);
restar(numeroa,numerob);
multiplicar(numeroa,numerob);
comprueba();
