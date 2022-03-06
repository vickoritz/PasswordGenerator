function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode")
}

let items = ["A", "B", "C", "1", "2", "3"] // items to us to generate password
let password = []
let passwordEl = document.getElementById("password-one")

function getRandomItem() {
    let randomIndex = Math.floor( Math.random() * 6)
    return items[randomIndex]
}
 
function generatePassword() {
    let firstItem = getRandomItem()
    let secondItem = getRandomItem()
    let thirdItem = getRandomItem()
    let forthItem = getRandomItem()
    password = [firstItem+secondItem+thirdItem+forthItem]
    console.log(password)
    passwordEl.textContent = password
    //passwordEl.textContent = "New password:" + password // TODO: why does this not write out in the html file the password generated?
}

// function renderPassword() {
//     passwordEl = password
//     for (let i = 0; i < password.length; i++) //from array, get first instance (0), last defined as lenght, and concatinate (upp) with one when writing out from array
//     passwordEl.textContent +=password[i]
//     console.log([i])
// }