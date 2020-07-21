function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;
	
	switch(mes){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		   alert("Tiene 31 dias.");
			break;
		case "Febrero":
				alert("Tiene 28 dias");

	 default:
		alert("Tiene 30 dias.");
			break;
		
		
			
		
		
		
		
		
		
		
		
		

	}
	
	



}//FIN DE LA FUNCIÓN