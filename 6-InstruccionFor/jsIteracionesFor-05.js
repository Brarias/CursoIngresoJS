function mostrar()
{
	let numero = 0 ;
	

	for(;numero !=9 ; ){
		
		numero = parseInt(prompt("Ingrese un numero (9) para salir"));
		
		if(numero == 9){
			continue;
		}
		alert("Usted ingresó " + numero);
	}



}//FIN DE LA FUNCIÓN