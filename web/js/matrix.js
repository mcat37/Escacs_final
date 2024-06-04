const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 10) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#fff1';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#777';
  ctx.font = '37pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = "♔♕♖♗♘♙";
    const text2 = text.charAt(Math.random()*6);
    const x = ind * 90;
    ctx.fillText(text2, x, y);
    if (y > 10 + Math.random() * 300000) ypos[ind] = 0;
    else ypos[ind] = y + 100;
  });
}

setInterval(matrix, 70);