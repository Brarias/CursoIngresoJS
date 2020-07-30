/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let seguir;
	let numero;
	let positivos = 0;
	let negativos = 1;
	let flag = 0;
	
	do {
	 
	 numero = parseInt(prompt("Ingrese un numero"));
	 
	 if(numero >= 0){ 
	 positivos = positivos + numero;
	 }
	 else{ 
		 flag = 1;
		 negativos = negativos * numero;
		 
	 }
	 
	 seguir = prompt("continua?");
	 
 }while( seguir == "s");

 if(flag == 0){
		// si entro aca es porque el usuario no ingreso negativos
		// entonces cambio el 1 por un 0 para dar el resultado correcto
      negativos = 0;
 }
	
 

	document.getElementById("txtIdSuma" ).value = positivos;
	document.getElementById("txtIdProducto").value = negativos;
}