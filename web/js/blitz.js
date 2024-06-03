
 // Variables
 let tiempoTotalBlanco = 60 * 3; // 3 minutos en segundos para el jugador blanco
 let tiempoTotalNegro = 60 * 3; // 3 minutos en segundos para el jugador negro
 const incremento = 1; // Un segundo de incremento por movimiento
 let intervaloBlanco; // Variable para el intervalo del jugador blanco
 let intervaloNegro; // Variable para el intervalo del jugador negro
 // Función para iniciar el contador de un jugador
 blancas = document.getElementById("countdown1");
 negras = document.getElementById("countdown2");

 function playTimer() {
     
     clearInterval(intervaloNegro);
     clearInterval(intervaloBlanco);
     if (!whiteTurn) {
         //cambio de funciones al negro
         console.log("¡Turno del jugador negro !");
         tiempoTotalBlanco += incremento;
         //aqui funciones del blanco
         intervaloNegro = setInterval(() => {
             tiempoTotalNegro--; // Decrementar el tiempo del jugador
             console.log("Tiempo restante para el jugador negro :", tiempoTotalNegro);
             let minutes = Math.floor(tiempoTotalNegro / 60);
             let seconds = tiempoTotalNegro % 60;
             negras.textContent = `Negras : ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
             if (tiempoTotalNegro <= 0){
                 clearInterval(intervaloBlanco);
                 clearInterval(intervaloNegro);
                 console.log("¡Tiempo agotado para el jugador negro !");
                 alert('El tiempo de las Negras a terminado, GANAN LAS BLANCAS!');
                 // Aquí agregar la lógica para finalizar el juego o tomar otras acciones
             }
         }, 1000); // Ejecutar cada segundo
         
     } else if (whiteTurn) {
         console.log("¡Turno del jugador blanco !");
         tiempoTotalNegro += incremento;
         //funciones del negro
         intervaloBlanco = setInterval(() => {
             tiempoTotalBlanco--; // Decrementar el tiempo del jugador
             let minutes = Math.floor(tiempoTotalBlanco / 60);
             let seconds = tiempoTotalBlanco % 60;
             blancas.textContent = `Blancas : ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
             console.log("Tiempo restante para el jugador blanco :", tiempoTotalBlanco);
             if (tiempoTotalBlanco <= 0){
                 clearInterval(intervaloBlanco);
                 clearInterval(intervaloNegro);
                 console.log("¡Tiempo agotado para el jugador blanco !");
                 alert('El tiempo de las Blancas a terminado, GANAN LAS NEGRAS!');
                 // Aquí agregar la lógica para finalizar el juego o tomar otras acciones
             }
         }, 1000); // Ejecutar cada segundo
     }   
 }
