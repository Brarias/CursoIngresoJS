function mostrar()
{
	
	let numeroIngresado;
  let suma;
	let promedio;
	let i;
	
   suma = 0;
   i = 0;

	while(i < 5){

		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		suma = suma + numeroIngresado;

		i++;
	}


	promedio = suma / 5;

	document.getElementById("txtIdSuma" ).value=suma;
	document.getElementById("txtIdPromedio").value=promedio;

	

	
	
	
	promedio = suma / 5;

	document.getElementById("txtIdSuma" ).value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
	
	
}//FIN DE LA FUNCIÓN