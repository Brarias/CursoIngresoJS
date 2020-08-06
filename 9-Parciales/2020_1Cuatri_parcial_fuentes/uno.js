
function mostrar()
{
	// declaracion de variales
	 let tipo;
	 let precio;
	 let marca;
	 let cantidad;
	 let fabricante;
	 let promedioCompra;
	 let precioAlcoholBarato;
	 let fabricanteAlcoholBarato;
	 let cantidadAlcoholBarato;
	 let tipoMayorCantidad;
	 let flagAlcohol = 0;
	 let acumBarbijo = 0;
	 let acumAlcohol = 0;
	 let acumJabon = 0;
	 let contadorBarbijo = 0;
	 let contadorAlcohol = 0;
	 let contadorJabon = 0;


	 // generar un bucle que itere 5 veces (For)
	  // dentro del bucle
	 // pido los datos de cada producto (tipo, cantidad, marca, fabricante, precio)
	 // debo validar los datos...
	 			for(let i = 0; i<5;i++){
					//pido tipo y lo valido
					tipo = prompt("ingrese tipo barbijo,jabón o alcohol: ");

					 while(!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol")){
					tipo = prompt("Tipo invalido.Ingrese tipo: barbijo,jabón o alcohol: ");
					 }
					 //pido precio y lo valido
					 precio = parseFloat("Ingrese el precio $(100-300): " );

					 while(!(precio >= 100 && precio <=300)){
					precio = parseFloat(prompt("Precio invalido .Ingrese el precio $(100-300): " ));
					 }
					 //pido cantidad y lo valido
					 cantidad = parseInt(prompt("Ingrese cantidad. Max 1000: "));

					 while(cantidad <= 0 || cantidad > 1000){
						cantidad = parseInt(prompt("Cantidad invalida. Ingrese cantidad. Max 1000: "));
					 }
					 //pido marca
					 marca = prompt("Ingrese marca: ");
					 //pido fabricante
					 fabricante = prompt("Ingrese fabricante: ");
					 //fin del pedido de datos
					 switch(tipo){
						case "alcohol":
							acumAlcohol = cantidad;
							contadorAlcohol++;
							if(flagAlcohol == 0 || precio < precioAlcoholBarato){
								precioAlcoholBarato = precio;
								cantidadAlcoholBarato = cantidad;
								fabricanteAlcoholBarato = fabricante;
								flagAlcohol = 1;
							}
						
							break;
						
							case "barbijo":
							acumBarbijo += cantidad;
							contadorBarbijo++;
							break;
						
							case "jabon":
							acumJabon += cantidad;
							contadorJabon++;
							break;

					 }


				 }//fin del For
				 
				 //hago los calculos que se realizan una sola vez
				 if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon ){
								tipoMayorCantidad = acumAlcohol;
								promedioCompra = acumAlcohol / contadorAlcohol;
				 }
				 else if(acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon ){
					tipoMayorCantidad = acumBarbijo;
					promedioCompra = acumBarbijo / contadorBarbijo;
				 }
				 else{
					tipoMayorCantidad = acumJabon;
					promedioCompra = acumJabon / contadorJabon;
				 }
				 
				 
				 
				 
				 
				 
				 //muestro la INFORMACION
				 if(flagAlcohol == 0){
					 alert("A-No se compró alcohol");
				 }
				 else{
					 alert("A-Datos alcohol barato:\nFabricante: "
						+fabricanteAlcoholBarato+"\nCantidad : "
						+cantidadAlcoholBarato+"\nPrecio: "
						+precioAlcoholBarato );
				 }

				 alert("B-Tipo con mas unidades: " +tipoMayorCantidad+" Promedio de compra: "+promedioCompra );

				 alert("C-Cantidad de jabones: " + acumJabon);


	 // para cumplir el punto a
	 // me fijo si el producto es alcohol
	 // y si es el primer alcohol o no y actualizo cantidad,
	 // precio y  fabricante de ser necesario

	 // para cumplir el punto b
	 //tengo que analizar la mayor cantidad e ir guardando el tipo del producto
	 // que tiene esa cantidad y el precio, y la cantidad obviamente

	 // para cumplir el punto c
	 // analizar si el producto es un jabon y actuar en consecuencia
	 
	 // fuera del bucle
	 // presentar los informes
}
