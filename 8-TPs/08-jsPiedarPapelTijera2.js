let eleccionMaquina;
let numero;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
     eleccionMaquina = Math.round(Math.random() * 2 + 1);
     console.log(eleccionMaquina);
     


}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("Pulsaste la Piedra");
  if(eleccionMaquina == 1){
    alert("Empataron");
    ContadorDeEmpates++;
  }
  else if(eleccionMaquina == 2){
    alert("Perdiste");
    ContadorDePerdidas++;
  }else{
    alert("Ganaste");
    ContadorDeGanadas++;

  }
  comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	alert("Pulsaste el Papel");
  if(eleccionMaquina == 2){
    alert("Empataron");
    ContadorDeEmpates++;
  }
  else if(eleccionMaquina == 3){
    alert("Perdiste");
    ContadorDePerdidas++;
  }else{
    alert("Ganaste");
    ContadorDeGanadas++;
  } 
  
  
 
  
  comenzar();
}
function tijera()
{
	alert("Pulsaste la Tijera");
  if(eleccionMaquina == 3){
    alert("Empataron");
    ContadorDeEmpates++;
  }
  else if(eleccionMaquina == 2){
    alert("Ganaste");
    ContadorDeGanadas++;
  }else{
    alert("Perdiste");
    ContadorDePerdidas++;
  }
    comenzar();
}

function mostrarResultado()
{
//aca se lee y actualiza la caja de texto con los valores, van los valores de los contadores
  document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
  document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
  document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;

}