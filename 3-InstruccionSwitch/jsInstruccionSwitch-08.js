function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

/*	switch(destinoIngresado){
		case "Bariloche" :
		case "Ushuaia" :
		alert("Hace FRIO");
		break;
		case "Cataratas" :
		case "Mar del plata" :
			alert("Hace CALOR");
	}*/

	if(destinoIngresado == "Bariloche" || destinoIngresado == "Ushuaia"){
		alert("Hace FRIO");
	}
	else if(destinoIngresado == "Cataratas" || destinoIngresado =="Mar del plata"){ 
		alert("Hace CALOR");
	}
	else{
		alert("Destino invalido");
	}
}//FIN DE LA FUNCIÓN