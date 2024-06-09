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

    }
    function light(){
      // document.getElementById("chessboard").style.backgroundColor = "white";
      // document.getElementById("chessboard").style.color = "black";
      document.getElementById("turn-indicator").style.color = "black";
      document.getElementById("canv").classList.remove('dark-theme');
      }
checkbox.addEventListener("click", () => {
    if(checkbox.checked){
    dark();
    }
  else{
    light();
  }

});