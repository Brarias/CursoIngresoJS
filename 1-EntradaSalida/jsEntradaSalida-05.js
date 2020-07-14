/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	//obtengo valores de la caja de texto por su ID y lo guardo en la variable correspondiente
	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById("txtIdEdad").value;
	// alert("Usted se llama: "+ nombre+" y tiene: "+ edad+" años");
	 // otra forma de concatenacion
	 alert(`Usted se llama ${nombre} y tiene ${edad} años`);


}

