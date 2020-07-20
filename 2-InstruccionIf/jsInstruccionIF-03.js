function mostrar()
{
	//tomo la edad  
	let edad;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad >= 18){
	
		alert("Es Mayor de edad"); 
	
	} else{
		alert("Es Menor de edad");
	}
	alert("Fin de la funcion");
}//FIN DE LA FUNCIÓN