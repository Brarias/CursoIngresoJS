function mostrar()
{
	let edad;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);
	// pregunta si estoy dentro del rango
	/*if(edad >= 13 && edad <= 17){
	
		alert("Es adolescente"); 
	
	} */
	// pregunta si estoy fuera del rango y lo niego
	if(!(edad < 13 || edad > 17)){
		alert("Es adolescente");
	}
	
	alert("Fin de la funcion");

}//FIN DE LA FUNCIÓN