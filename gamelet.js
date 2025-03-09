const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === 'KeyW') {
    position = position - 10;
  }
  if (e.code === 'KeyE') {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
 function handleKeyPress(v) {
  if (v.code === 'KeyA') {
    position = position - 10;
  }
  if (v.code === 'KeyQ') {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
}
  refresh();
}
function refresh() {
  ball.style.left = position + 'px';
}
function refresh() {
  ball.style.top = position + 'px';