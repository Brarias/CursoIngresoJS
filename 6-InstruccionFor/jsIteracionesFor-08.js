function mostrar()
{	let numero;
	let contadorDivisores = 0;
	
	numero = parseInt(prompt("Ingrese un número"));
	
		 for(let i = 1; i <= numero; i++){
			 
			 if(numero % i == 0){
					 
					 contadorDivisores++;
					 
			 }
		 }
	 if(contadorDivisores != 2){
		 alert(numero + " No es primo");
	 }
	 else{
		 alert(numero + " Es primo");
	 }
		 
	

}//FIN DE LA FUNCIÓN