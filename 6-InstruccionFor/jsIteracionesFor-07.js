function mostrar()
{

let numero;
let contadorDivisores = 0;

numero = parseInt(prompt("Ingrese un número"));

	 for(let i = 1; i <= numero; i++){
		 
		 if(numero % i == 0){
				 console.log(i);
				 contadorDivisores++;
				 
		 }
	 }

	 console.log("cantidad de divisores encontrados: " + contadorDivisores);



}//FIN DE LA FUNCIÓN