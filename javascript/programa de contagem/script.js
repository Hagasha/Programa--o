const diminuirBtn = document.getElementById('diminuirBtn');
const resetBtn = document.getElementById('resetBtn');
const aumentarBtn = document.getElementById('aumentarBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

aumentarBtn.onclick = function() {
  count++;
  countLabel.textContent = count;
}
diminuirBtn.onclick = function() {
  count--;
  countLabel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}