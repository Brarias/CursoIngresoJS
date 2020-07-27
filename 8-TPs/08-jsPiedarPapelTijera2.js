let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	eleccionMaquina = Math.round(Math.random() * 2 + 1);



}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("Pulsaste la Piedra");
  if(eleccionMaquina == 1){
    alert("Empataron");
  }
  else if(eleccionMaquina == 2){
    alert("Perdiste");
  }else{
    alert("Ganaste");
  }

}//FIN DE LA FUNCIÓN
function papel()
{
	alert("Pulsaste el Papel");
  if(eleccionMaquina == 2){
    alert("Empataron");
  }
  else if(eleccionMaquina == 3){
    alert("Perdiste");
  }else{
    alert("Ganaste");
  } alert("Pulsaste el Papel");
  if(eleccionMaquina == 2){
    alert("Empataron");
  }
  else if(eleccionMaquina == 3){
    alert("Perdiste");
  }else{
    alert("Ganaste");
  }
}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("Pulsaste la Tijera");
  if(eleccionMaquina == 3){
    alert("Empataron");
  }
  else if(eleccionMaquina == 2){
    alert("Ganaste");
  }else{
    alert("Perdiste");
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
//aca se lee y actualiza la caja de texto con los valores, van los valores de los contadores
 if

}