function mostrar()
{
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno" :
			if(destino == "Bariloche"){
				alert("Se viaja a ese lugar");
			}
			else{
				alert("No Se viaja a ese lugar");
			}
			break;
			
	  case "Verano" :
				if(destino == "Mar del plata" || destino == "Cataratas"){
					alert("Se viaja a ese lugar");
				}
				else{
					alert("No Se viaja a ese lugar");
				}

		case "Otoño" :
			alert("Se viaja a ese lugar");
			break;

		case "Primavera" :
			if(destino == "Mar del plata" || destino == "Cataratas" || destino == "Cordoba"){
				alert("Se viaja a ese lugar");
			}
			else{
				alert("No Se viaja a ese lugar");
			}
			break;
			
			
	}
	 
}//FIN DE LA FUNCIÓN