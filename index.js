function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode")
}

let items = ["A", "B", "C", "1", "2", "3"] // items to us to generate password
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
    let randomIndex = Math.floor( Math.random() * 6)
    return items[randomIndex]
}
 
function firstPassword() {
    let firstItem = getRandomItem()
    let secondItem = getRandomItem()
    let thirdItem = getRandomItem()
    let forthItem = getRandomItem()
    password = [firstItem+secondItem+thirdItem+forthItem]
    console.log(password)
    passwordOneEl.textContent = password
}

function secondPassword() {
    let firstItem = getRandomItem()
    let secondItem = getRandomItem()
    let thirdItem = getRandomItem()
    let forthItem = getRandomItem()
    password = [firstItem+secondItem+thirdItem+forthItem]
    console.log(password)
    passwordTwoEl.textContent = password
}

function thirdPassword() {
    let firstItem = getRandomItem()
    let secondItem = getRandomItem()
    let thirdItem = getRandomItem()
    let forthItem = getRandomItem()
    password = [firstItem+secondItem+thirdItem+forthItem]
    console.log(password)
    passwordThreeEl.textContent = password
}

function forthPassword() {
    let firstItem = getRandomItem()
    let secondItem = getRandomItem()
    let thirdItem = getRandomItem()
    let forthItem = getRandomItem()
    password = [firstItem+secondItem+thirdItem+forthItem]
    console.log(password)
    passwordFourEl.textContent = password
}

// function renderPassword() {
//     passwordEl = password
//     for (let i = 0; i < password.length; i++) //from array, get first instance (0), last defined as lenght, and concatinate (upp) with one when writing out from array
//     passwordEl.textContent +=password[i]
//     console.log([i])
// }