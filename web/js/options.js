//overlay para la config

// const openBtns = document.querySelectorAll('#openBtn');
// const overlays = document.querySelectorAll('#overlay');

// function on(){
//     openBtns.forEach((btn, index) => {
//       btn.addEventListener('click', () => {
//           overlays[index].style.display = "grid";
//         });
//     });
//     };
//     on();
    
//     function off() {
//       overlays.forEach((overlay) => {
//         overlay.style.display = "none";
//       });
//     };

// function on() {
//     document.getElementById("overlay").style.display = "grid";
//   }
  
//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   }
//   off();
const theme = document.getElementById("theme");
const canvTheme = document.getElementById("canv");
const checkbox = document.getElementById("checkbox");

  function dark(){
    // document.getElementById("chessboard").style.backgroundColor = "black";
    // document.getElementById("chessboard").style.color = "white";
    document.getElementById("turn-indicator").style.color = "white";
    document.getElementById("canv").classList.add('dark-theme');
    document.getElementById("mySidenav").classList.add('dark-theme');
    document.getElementById("game-title").style.borderBottom = "5px groove black";

    }
    function light(){
      // document.getElementById("chessboard").style.backgroundColor = "white";
      // document.getElementById("chessboard").style.color = "black";
      document.getElementById("turn-indicator").style.color = "black";
      document.getElementById("canv").classList.remove('dark-theme');
      document.getElementById("mySidenav").classList.remove('dark-theme');
      document.getElementById("game-title").style.borderBottom = "5px groove white";
      }
checkbox.addEventListener("click", () => {
    if(checkbox.checked){
    dark();
    }
  else{
    light();
  }

});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// //test para cambio de aspecto
// document.getElementById("changeStyleBtn").addEventListener("click", function() {
//     // Buscar el elemento <style> existente en el documento
//     var styleElement = document.querySelector("style#boardStyle");
    
//     // Si no se encuentra el elemento <style> con id "boardStyle", crear uno nuevo
//     if (!styleElement) {
//         styleElement = document.createElement("style");
//         styleElement.id = "boardStyle";
//         document.head.appendChild(styleElement);
//     }
    
//     // Obtener la hoja de estilos
//     var styleSheet = styleElement.sheet;

//     // Si la hoja de estilos ya tiene reglas, borrarlas
//     while (styleSheet.rules.length > 0) {
//         styleSheet.deleteRule(0);
//     }

//     // Añadir la regla de estilo dependiendo del estado actual del tablero
//     var newStyle = ".row-even .square:nth-child(odd),.row-odd .square:nth-child(even) {background-color: #769656;}";
//     var newStyle2 = ".row-even .square:nth-child(even),.row-odd .square:nth-child(odd) {background-color: #eeeed2;}";
//     if (styleElement.dataset.style === "alt") {
//       newStyle = ".row-even .square:nth-child(odd),.row-odd .square:nth-child(even) { background-color: black;}";
//       newStyle2 = ".row-even .square:nth-child(even),.row-odd .square:nth-child(odd) {background-color: white;}";
//         styleElement.dataset.style = "";
//     } else {
//         styleElement.dataset.style = "alt";
//     }

//     // Añadir la nueva regla de estilo a la hoja de estilos
//     styleSheet.insertRule(newStyle, 0);
// });
