const screen = document.getElementById('screen')

const enterButton = document.getElementById('enter')
const clearButton = document.getElementById('clear')

const numButtons = document.querySelectorAll('.num-button')
const opButtons = document.querySelectorAll('.op-button')

function addToScreen(text){
  screen.innerHTML += text
}

function clearScreen(){
  screen.innerHTML = ""
}

function clickNum(e){
  // const numClicked = e.target.innerHTML
  const numClicked = e.target.dataset.symbol
  addToScreen(numClicked)
}

function clickOp(e){
  // const opClicked = e.target.innerHTML
  const opClicked = e.target.dataset.symbol
  addToScreen(" " + opClicked + " ")
}

function clickEnter(){
  screen.innerHTML = eval(screen.innerHTML)
}

numButtons.forEach(numButton => {
  numButton.addEventListener('click',clickNum)
})

opButtons.forEach(opButton => {
  opButton.addEventListener('click',clickOp)
})

clearButton.addEventListener('click',clearScreen)

enterButton.addEventListener('click',clickEnter)