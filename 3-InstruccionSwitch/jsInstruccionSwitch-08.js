function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche" :
		case "Ushuaia" :
		alert("Hace FRIO");
		break;
		case "Cataratas" :
		case "Mar del plata" :
			alert("Hace CALOR");
	}

}//FIN DE LA FUNCIÓN