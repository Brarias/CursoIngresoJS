/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  let ancho;
  let largo;
  let perimetro;
  let cantidadAlambre;

  ancho = parseFloat(document.getElementById("txtIdAncho").value);

  largo = parseFloat(document.getElementById("txtIdLargo").value);

  perimetro = (ancho + largo) * 2;

  cantidadAlambre = perimetro * 3;

  alert("Usted necesita: " + cantidadAlambre + " metros de alambre");
}
function Circulo () 
{
  let radio;
  let perimetro;
  let cantidadAlambre;
  
  
  radio=parseFloat(document.getElementById("txtIdRadio").value);

  perimetro = radio * (2 * Math.PI);

  cantidadAlambre = perimetro * 3;

  alert("Usted necesita " + cantidadAlambre.toFixed(2) + " metros de alambre");


}
function Materiales () 
{
	let ancho;
  let largo;
  let area;
  let cemento;
  let cal;
  

  ancho = parseFloat(document.getElementById("txtIdAncho").value);

  largo = parseFloat(document.getElementById("txtIdLargo").value);

  area = ancho * largo;

  cemento = area * 2;

  cal = area * 3;

  alert("Usted necesita " + cemento.toFixed(2) + " bolsas de cemento y " + cal.toFixed(2)+ " bolsas de cal");

  

  
}
// las constantes se declaran con la palabra const
// las constantes se asignan en el ,is,o renglon en la q se declaran
// las constantes se nombran en mayuscula
// si el nombre es compueston se separan con _ cada palabra
