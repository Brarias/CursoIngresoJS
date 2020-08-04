function mostrar()
{
	// declaracion de variables
 let numero;
 let contadorPares = 0;
 
 // pido un numero
 numero = parseInt(prompt("Ingrese un número"));

// deberia hacer que una variable tome los valores
// desde el 1 hasta el numero ingresado (usando un bucle)

    for(let i = 1; i <= numero; i++){
			// tengo que analizar si el valor tomado por la variable es par
			// para mostrarlo y contarlo
      if(i % 2 == 0){
					console.log(i);
					contadorPares++;
					
			}
		}
// mostrar la cantidad de pares encontrados
		console.log("cantidad de pares encontrados: " + contadorPares);

}