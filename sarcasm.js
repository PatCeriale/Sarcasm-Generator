const startText = document.getElementById("startText");
const sarcasmBox = document.getElementById("sarcasmText");

// onClick Event
function sarcasmify() {
  event.preventDefault();

  const inputText = startText.value.trim();

  console.log(inputText);
  // Returns text to sarcasm box
  sarcasmBox.innerHTML = inputText;
}
