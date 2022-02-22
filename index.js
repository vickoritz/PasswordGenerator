function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode")
}

let items = ["A", "B", "C", "1", "2", "3"] // items to us to generate password
let password = []
let passwordEl = document.getElementById("password-one")

function getRandomItem() {
    let randomIndex = Math.floor( Math.random() * 4)
    return items[randomIndex]
}
 
function generatePassword() {
    let firstItem = getRandomItem()
    let secondItem = getRandomItem()
    let thirdItem = getRandomItem()
    let forthItem = getRandomItem()
    password = [firstItem, secondItem, thirdItem, forthItem]
    renderPassword()
}

function renderPassword() {
    passwordEl.textContent = "Password " 
    for (let i = 0; i < password.length; i++) {
        passwordEl.textContent +=password[i] + ""
    }
}