const clapButton = document.getElementById('clap-button');

clapButton.addEventListener('click', disco);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function switchBackground() {
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

function disco() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
    switchBackground();
    console.log('background color change #' + i);}, 500)
  }}
