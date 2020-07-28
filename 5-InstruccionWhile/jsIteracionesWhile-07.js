/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
   let seguir;
	 let numeroIngresado;
	 let suma = 0;
	 let promedio;
	 let contador = 0;
	
	
	 do {
		
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		suma = suma + numeroIngresado;
		contador++;
		seguir = prompt("continua?");
		
	}while( seguir == "s");
	
	promedio = suma / contador;

	document.getElementById("txtIdSuma" ).value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN