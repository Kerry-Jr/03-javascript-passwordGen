var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "'"]

var userLength = parseInt(prompt("How long do you want your password? Enter between 8-128 characters"));

while (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    userLength = parseInt(prompt("How long do you want your password? Enter between 8-128 characters"));
}

var userSpecial = confirm("Would you like special characters in your password?");
var userNum = confirm("Would you like numbers in your password?");
var userUpper = confirm("Would you like upper case letters in your password?");
var userLower = confirm("Would you like lower case letters in your password?");









function randomGen(array) {
    // return a random chara from lower set
    return array[Math.floor(Math.random() * array.length)];

}


function generatePassword() {

    var password = "";
    for (var i = 0; i < userLength; i++) {
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

var generateBtn = document.querySelector("#generate");
// var generatePassword = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generatePassword.addEventListener("click", writePassword);


















// var userChoice =










    // function to get random number between min and max value //
    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //     console.log(9, 120);
    // }




// var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+{}./][?"
// var temp = "";

// function generatePassword(plength) {
//     temp = "";
//     for (i = 0; i < plength; i++)
//         temp += keylist.charAt(Math.floor(Math.random() * keylist.length))
//     return temp
// }

// function populateForm(enterLength) {
//     document.pgenerate.output.value = gen
// }


















// var questions = [
//     {q:"Would you like special characters in your password?", a: true},
//     {q:"Would you like numbers in your password?", a: true},
//     {q:"Would you like lower case letters in your password?", a: true},
//     {q:"Would you like to include upper case letters too?", a: true}
// ];