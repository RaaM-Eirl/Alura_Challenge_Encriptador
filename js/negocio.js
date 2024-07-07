const alertMessage = document.querySelector(".alert-message-box");
const textBox = document.querySelector(".text-box");
const textAlert = document.querySelector(".alert");
const btnEncript = document.getElementById("encript");

const notification = (text, img) => {
  const imgAlert = document.createElement("img");
  textAlert.textContent = "";
  textAlert.classList.add("active");
  setTimeout(() => {
    textAlert.classList.remove("active");
  }, 2600);
  imgAlert.src = img;
  imgAlert.classList.add("icon-head");
  textAlert.textContent = text;
  textAlert.appendChild(imgAlert);
};
inputText.focus();

function encriptText() {
  let textResult = document
    .getElementById("inputText")
    .value.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (textResult.length === 0 || /^\s+$/.test(textResult)) {
    notification(
      "Debe ingresar un texto para ser Encryptado",
      "images/icon-head-lose.svg"
    );
  } else if (/[^a-z ]/.test(textResult)) {
    notification(
      "Solo esta permitido ingresar letras minusculas y sin acento",
      "images/icon-head-lose.svg"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResult;
  inputText.value = "";
  inputText.focus();
}

btnEncript.addEventListener("click", encriptText);


function Desencryptar() {
  let textResultDec = document
    .getElementById("inputText")
    .value.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("text-result").innerHTML = textResultDec;

  if (textResultDec.length === 0 || /^\s+$/.test(textResultDec)) {
    notification(
      "Debe ingresar un texto para ser Desencryptado",
      "images/icon-head-lose.svg"
    );
  } else if (/[^a-z ]/.test(textResultDec)) {
    notification(
      "Solo esta permitido ingresar letras minusculas y sin acento",
      "images/icon-head-lose.svg"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResultDec;
  inputText.value = "";
  inputText.focus();
}


function CopiarTexto() {
  let copyText = document.getElementById("text-result").textContent;
  console.log({ copyText });
  navigator.clipboard.writeText(copyText).then(() => {
    if (copyText.length === 0 || /^\s+$/.test(copyText)) {
      notification("No existe texto para copiar", "images/icon-head-lose.svg");
    } else {
      notification("Texto copiado", "images/icon-head-win.svg");
    }
  });
  inputText.focus();
}
