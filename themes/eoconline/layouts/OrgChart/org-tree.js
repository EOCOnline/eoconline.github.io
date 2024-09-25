let fontSize = document.body.style.fontSize;

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function setFontSize(el) {
  fontSize = el.value;
  if (!isNumber(fontSize) || fontSize < 0.5) {
    fontSize = 1;
  }
  document.body.style.fontSize = fontSize + 'em';
}

document.querySelector("#fontSize").addEventListener("change", (e) => { setFontSize(e.target); });

document.querySelector("#fontSize").addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    // esc key pressed
    const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
    if (isNotCombinedKey) {
      // Escape key pressed without ctrl or alt or shift keys
      setFontSize(1);
    }
  }
});
