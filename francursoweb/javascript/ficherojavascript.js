var parrafo = document.getElementsByTagName('p');

for(var i = 0; i < parrafo.length; i++){
	parrafo[i].style.color="red";
}
//alert(parrafo[0]);

var parrafoEtiqueta = document.getElementsByName("etiqueta");
parrafoEtiqueta[0].style.color="green";

var parrafoNombre = document.getElementById("nombre");
parrafoNombre.style.color="blue";

function llenarLista() {

	var etiquetaUl = document.getElementsByTagName("ul");

	var nodoLi = document.createElement("li");

	var contenido = document.createTextNode("Hola chicos");

	nodoLi.appendChild(contenido); //en la var nodoLi guardas lo de contenido 'appendChild'

	etiquetaUl[0].appendChild(nodoLi);

}

function vaciarLista() {

	var etiquetaUl = document.getElementsByTagName("ul"); //busca dentro del fichero todos los ul

	var li = etiquetaUl[0].getElementsByTagName("li")[0]; //coge todos los li en li
  etiquetaUl[0].removeChild(li); //borra al hijo

}

function mostrarmensaje(){
  alert("Metodo mostrarmensaje ");
}
