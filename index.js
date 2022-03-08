//TODOs
//Add one-click copy password to clipboard
//Add ability to set password lenght

function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode")
}

let items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "|", "~"]  // items to us to generate password
let password = []
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let passwordThreeEl = document.getElementById("password-three")
let passwordFourEl = document.getElementById("password-four")


function generatePasswords() {
    firstPassword()
    secondPassword()
    thirdPassword()
    forthPassword()
}

function getRandomItem() {
    let randomIndex = Math.floor( Math.random() * 51)
    return items[randomIndex]
}
 
function getNewPassword() {
    let password = getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem() + getRandomItem()
    return [password]
}

function firstPassword() {
    console.log(password)
    passwordOneEl.textContent = getNewPassword()
}

function secondPassword() {
    console.log(password)
    passwordTwoEl.textContent = getNewPassword()
}

function thirdPassword() {
    console.log(password)
    passwordThreeEl.textContent = getNewPassword()
}

function forthPassword() {
    console.log(password)
    passwordFourEl.textContent = getNewPassword()
}
