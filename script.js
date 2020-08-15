//Organizar funciones con setTimeout

startTimer(5, "timer");

function startTimer(secs, elem) {
     let t = document.getElementById(elem); //Llama cada vez que la funcion es llamada - cada segundo
     if(secs.toString().length == 1) {
          t.innerHTML = "<h1>00:0" + secs + "</h1>";
     } else {
          t.innerHTML = "<h1>00:0" + secs + "</h1>";
     }
     if(secs<1) {
          t.innerHTML = "<h1>00:00</h1>";
          clearTimeout(countDown);
     }
     secs--;
     let countDown = 
     setTimeout(startTimer, 1000, secs, elem);
}