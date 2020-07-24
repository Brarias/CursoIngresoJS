function mostrar()
{
	let estacionIngresada;
	let destino;
	let descuento;
	let aumento;
	let precioConDescuento;
	let precioConAumento;
	const TARIFAS = 15000;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case "Invierno" :
			if(destino == "Bariloche"){
				aumento = 20;
			}
			else if(destino == "Cordoba" || destino == "Cataratas"){
				descuento = 10;
			}
			else if(destino == "Mar del plata"){
				descuento = 20;
			}
			
			
			break;
		
		case "Verano" :
			if(destino == "Bariloche"){
          descuento = 20;
			}
			else if(destino == "Cataratas" || destino == "Cordoba"){
				aumento = 10;
			}
			else{
				aumento = 20; 
			}
			break;
		
		case "Otoño" :
		case "Primavera" :
			if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata"){
         aumento = 10;
			}
			else{
				descuento = 0;
			}
			break;
			
	}
	precioConDescuento = TARIFAS - TARIFAS * descuento / 100;

	precioConAumento = TARIFAS + TARIFAS * aumento / 100;

	if(aumento > 0){
		alert("Usted debe abonar: $ " + precioConAumento);
	}
	else{
		alert("Usted debe abonar: $ " + precioConDescuento);
	
	}
	


}//FIN DE LA FUNCIÓN