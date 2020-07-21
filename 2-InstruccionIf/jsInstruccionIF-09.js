function mostrar()
{
	let numeroAleatorio;
	let maximo = 10;
	let minimo = 1;

	numeroAleatorio = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numeroAleatorio);

}//FIN DE LA FUNCIÓN