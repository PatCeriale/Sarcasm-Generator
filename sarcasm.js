const startText = document.getElementById("startText");
const sarcasmBox = document.getElementById("sarcasmText");

// onClick Event
function sarcasmify() {
  event.preventDefault();

  // Turn input into array
  const inputText = startText.value.trim();
  const textArray = inputText.split("");

  // Map over array, 50/50 chance of letter's case
  const newArray = textArray.map((x) => {
    if (Math.random() < 0.5) {
      return x.toLowerCase();
    } else {
      return x.toUpperCase();
    }
  });

  // Join array back to a string
  const sarcasmText = newArray.join("");
  console.log(sarcasmText);

  // Returns text to sarcasm box
  sarcasmBox.innerHTML = sarcasmText;
}
