let timeoutId;

function startTimer(){
  timeoutId = setTimeout(() => window.alert('Tempo esgotado!'), 3000);
}

function stopTimer(){
  clearTimeout(timeoutId);
}