const button = document.querySelector("button");

button.addEventListener("click", function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  const result = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(min, max);

  // Exibir o resultado dentro da imagem
  const changeImage = document.querySelector(".changeImage");
  changeImage.src = "./assets/changeImage.png";

  // Exibir o resultado na sobreposição
  const resultOverlay = document.querySelector(".result-overlay");
  resultOverlay.textContent = result;
});

function generateNumberTwo() {
  const valorMin = Math.ceil(document.querySelector(".input-min").value);
  const valorMax = Math.floor(document.querySelector(".input-max").value);

  if(valorMin >= valorMax) {
    alert(`ATENÇÃO: 
    O primeiro número deve ser menor que o segundo número.`)
  }
}

button.addEventListener("click",generateNumberTwo)



