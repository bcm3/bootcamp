function acceder() {
	var texto = document.getElementById("cuadro")
	texto.innerHTML = ""
	
	var parrafos = document.getElementsByTagName("p")
	
	for (i=0 ; i<parrafos.lenght ; i++ ) {
		texto.innerHTML += parrafos[i].innerHTML + <"br/>"
	}
}

function borrar() {
		var texto = document.getElementById("cuadro")
		texto.innerHTML = ""
}