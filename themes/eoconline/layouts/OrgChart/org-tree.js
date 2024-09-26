let fontSize = document.querySelector(".tree").style.fontSize;
setFontSize(fontSize);

document.querySelector("#fontSize").addEventListener("input", (e) => { setFontSize(e.target); });

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

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function setFontSize(el) {
  fontSize = el.value;
  if (!isNumber(fontSize) || fontSize < 0.5) {
    fontSize = 1;
  }
  document.querySelector(".tree").style.fontSize = fontSize + 'em';
}
