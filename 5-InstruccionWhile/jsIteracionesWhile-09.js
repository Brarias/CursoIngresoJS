/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	// declaro variables
	let seguir;
	let numero;
	let maximo;
	let minimo;
	let flag = 0;
	
	
	// genero un bucle del tipo mientras el usuario quiera (do while)
	do {
	 // pido un numero
	 numero = parseInt(prompt("Ingrese un numero"));
	 console.log(numero);
	// tengo q averiguar si es la primera iteracion
	if(flag == 0){
		// si es la primera iteracion, inicializo max y min con ese numero
		maximo = numero;
		minimo = numero;
		flag = 1;
	}
	// en las restantes iteraciones debo compararlo con max y min anterior
	// si tengo un nuevo max o min actualizo max y min con los nuevos valores
    if(numero > maximo){
			maximo = numero;
		}
		else if(numero < minimo){
			minimo = numero;
		}


   seguir = prompt("continua?");

	 
	 
 }while( seguir == "s");
	 
   
	// mostrar los resultados max y min
		document.getElementById("txtIdMaximo").value = maximo;
		document.getElementById("txtIdMinimo").value = minimo;

	
}//FIN DE LA FUNCIÓN