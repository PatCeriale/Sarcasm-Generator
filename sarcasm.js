const startText = document.getElementById("startText");
const sarcasmBox = document.getElementById("sarcasmText");
const btnBox = document.getElementById("btnBox");

// Sarcasmify onClick Event
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

  // Sets sarcasmified text as html
  sarcasmBox.innerHTML = sarcasmText;

  // Append copy button to page

  //   const copyBtn = document.createElement(`BUTTON`);
  //   copyBtn.innerHTML = "Copy to clipboard";
  //   copyBtn.setAttribute("class", "copyBtn");
  //   copyBtn.setAttribute("onclick", copyTextFunction());
  //   if (!document.getElementById("copyBtn")) {
  //     btnBox.appendChild(copyBtn);
  //   }
}

// Copy text to clipboard

function copyTextFunction() {
  var copyText = document.getElementById("sarcasmText").textContent;
  const el = document.createElement("textarea");
  el.value = copyText;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  console.log(copyText);
  el.focus();
  el.select();
  //   copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText);
}
