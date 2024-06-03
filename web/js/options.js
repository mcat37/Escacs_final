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

function on() {
    document.getElementById("overlay").style.display = "grid";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  off();