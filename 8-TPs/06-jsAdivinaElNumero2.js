/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let flag = 0;
let contadorIntentos;

function comenzar()
{
//Genero el número RANDOM entre 1 y 100
numeroSecreto = Math.round(Math.random() * 99 + 1);
//alert(numeroSecreto );
alert("Listo. ya pensé un número");
flag = 1;
contadorIntentos = 0;

}

function verificar()
{
let numero;


if(flag == 0){
alert("Debes presionar el boton Comenzar");

}
else{
numero = parseInt(document.getElementById("txtIdNumero").value);
contadorIntentos++;
document.getElementById("txtIdIntentos").value = contadorIntentos;

if(numero == numeroSecreto){
	
		switch(contadorIntentos){
		case 1:
			alert("usted es psiquico");
			break;
		case 2:
			alert("excelente percepción");
		 break;
		case 3:
			alert("Esto es suerte");
			break;
			case 4:
			alert("Excelente técnica");
			break;
			case 5:
			alert("usted está en la media");
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("falta técnica");
				break;
				default:
					alert("afortunado en el amor!!");
					
					

	}
}
else if(numero > numeroSecreto){
	alert("Te pasaste");
}
else{
	alert("Te falta");
}

}

document.getElementById("txtIdNumero").value = "";
document.getElementById("txtIdNumero").focus();
}