const readlineSync = require('readline-sync');

let password;
let hasUpper = false;
let hasNumber = false;

//Ask user for a password
do {
password = readlineSync.question("Enter a password (Password must be at least 8 characters, contain at least one uppercase letter and at least one number).\n ")

const passlength = password.length >= 8;

for (let i = 0; i < password.length; i++){
    if (password[i] >= 'A' && password[i] <= 'Z') {
        hasUpper = true;
    }
    if (password[i] >= '0' && password[i] <= '9'){
        hasNumber = true;
    }
}

if (password.length < 8|| !hasUpper || !hasNumber){
    console.log("Password does not meet the requirements. Please try again.");
}

} while (password.length < 8 || !hasNumber || !hasUpper);

console.log("Password is valid!");