const screen = document.getElementById('screen');
const clear = document.getElementById('clear');
const enter = document.getElementById('enter');

const numbers = document.querySelectorAll('.num-button');
const operators = document.querySelectorAll('.op-button');

function clearScreen() {
  screen.innerHTML = "";
}

function addToScreen(text) {
  screen.innerHTML += text;
}

function evaluate() {
  console.log(screen.innerHTML);
  if (screen.innerHTML !== '') {
    try {
      screen.innerHTML = eval(screen.innerHTML);
    } catch (e) {
      screen.innerHTML = 'SHIT!';
    }
  }
}

clear.addEventListener('click', clearScreen);
enter.addEventListener('click', evaluate);

for (let number of numbers) {
  number.addEventListener('click', function () {
    addToScreen(this.innerHTML);
  });
}

for (let operator of operators) {
  operator.addEventListener('click', function () {
    addToScreen(` ${this.innerHTML} `);
  });
}
