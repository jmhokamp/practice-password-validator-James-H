const readlineSync = require('readline-sync');

//Set Variables
let password;
let hasUpper = false;
let hasNumber = false;

//Ask user for a password
do {
password = readlineSync.question("Enter a password (Password must be at least 8 characters, contain at least one uppercase letter and at least one number).\n ")
//Check String length
const passlength = password.length >= 8;

for (let i = 0; i < password.length; i++){ //loop each chartcher and check for uppercase
    if (password[i] >= '\u0041' && password[i] <= '\u005A') {
        hasUpper = true;
    }
    if (password[i] >= '0' && password[i] <= '9'){//loop each character and check for number
        hasNumber = true;
    }
}

if (password.length < 8|| !hasUpper || !hasNumber){//error out when one requirement is broken
    console.log("Password does not meet the requirements. Please try again.");
}

} while (password.length < 8 || !hasNumber || !hasUpper);// keep running while one is not true

console.log("Password is valid!"); //Finished