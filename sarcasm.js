const startText = document.getElementById("startText");
const sarcasmBox = document.getElementById("sarcasmText");

// onClick Event
function sarcasmify() {
  event.preventDefault();

  const inputText = startText.value.trim();
  const textArray = inputText.split("");

  const newArray = textArray.map((x) => {
    if (Math.random() < 0.5) {
      return x.toLowerCase();
    } else {
      return x.toUpperCase();
    }
  });

  const sarcasmText = newArray.join("");
  console.log(sarcasmText);
  // Returns text to sarcasm box
  sarcasmBox.innerHTML = sarcasmText;
}
