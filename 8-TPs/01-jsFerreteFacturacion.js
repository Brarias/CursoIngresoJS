/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
  let precioA;
  let precioB;
  let precioC;
  let suma;

  precioA = parseFloat(document.getElementById("txtIdPrecioUno").value);

  precioB = parseFloat(document.getElementById("txtIdPrecioDos").value);

  precioC = parseFloat(document.getElementById("txtIdPrecioTres").value);

  suma = precioA + precioB + precioC;
  
  alert("El resultado de la suma es: $ " + suma);
}
function Promedio () 
{
	let precioA;
  let precioB;
  let precioC;
  let suma;
  let promedio;

  precioA = parseFloat(document.getElementById("txtIdPrecioUno").value);

  precioB = parseFloat(document.getElementById("txtIdPrecioDos").value);

  precioC = parseFloat(document.getElementById("txtIdPrecioTres").value);

  suma = precioA + precioB + precioC;

  promedio = suma / 3;

  alert("El promedio es: $ " + promedio);
}
function PrecioFinal () 
{
	let precioA;
  let precioB;
  let precioC;
  let suma;
  let precioIva;
  let precioFinal;

  precioA = parseFloat(document.getElementById("txtIdPrecioUno").value);

  precioB = parseFloat(document.getElementById("txtIdPrecioDos").value);

  precioC = parseFloat(document.getElementById("txtIdPrecioTres").value);

  suma = precioA + precioB + precioC;

  precioIva = suma * 21 / 100;

  precioFinal = suma + precioIva;

  alert("El precio final es $ " + precioFinal);
}