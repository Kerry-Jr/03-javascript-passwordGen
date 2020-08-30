let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "'"]

let userLength = parseInt(prompt("How long do you want your password? Enter between 8-128 characters"));

while (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    userLength = parseInt(prompt("How long do you want your password? Enter between 8-128 characters"));
}

let userSpecial = confirm("Would you like special characters in your password?");
let userNum = confirm("Would you like numbers in your password?");
let userUpper = confirm("Would you like upper case letters in your password?");
let userLower = confirm("Would you like lower case letters in your password?");


function randomGen(array) {
    // return a random chara from lower set
    return array[Math.floor(Math.random() * array.length)];
}

function generatePassword() {

    let password = "";
    for (let i = 0; i < userLength; i++) {
        if (userLower && password.length !== userLength) {
            password += randomGen(lowerCase)
        }
        if (userUpper && password.length !== userLength) {
            password += randomGen(upperCase)
        }
        if (userSpecial && password.length !== userLength) {
            password += randomGen(sym)
        }
        if (userNum && password.length !== userLength) {
            password += randomGen(numbers)
        }
    }
    return password
}

let generateBtn = document.querySelector("#generate");
// var generatePassword = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generatePassword.addEventListener("click", writePassword)
