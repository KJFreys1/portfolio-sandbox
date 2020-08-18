const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const red = document.querySelector('#red')
const yellowButton = document.querySelector('#yellow .button')
const greenButtons = document.querySelectorAll('#green .button')
const blueButtons = document.querySelectorAll('#blue .button')
const redButton = document.querySelector('#red .button')

// Right
redButton.addEventListener('click', () => {
    blue.style.transform = 'translateX(0)'
})

// Left
blueButtons[0].addEventListener('click', () => {
    blue.style.transform = 'translateX(100vw)'
})

// Right
blueButtons[1].addEventListener('click', () => {
    green.style.transform = 'translateX(0vw)'
})

// Left
greenButtons[0].addEventListener('click', () => {
    green.style.transform = 'translateX(100vw)'
})

// Right
greenButtons[1].addEventListener('click', () => {
    yellow.style.transform = 'translateX(0vw)'
})

// Left
yellowButton.addEventListener('click', () => {
    yellow.style.transform = 'translateX(100vw)'
})