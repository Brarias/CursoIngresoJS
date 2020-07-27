/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;



function comenzar()
{
	
eleccionMaquina = Math.round(Math.random() * 2 + 1);
console.log(eleccionMaquina);


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
  }
}//FIN DE LA FUNCIÓN