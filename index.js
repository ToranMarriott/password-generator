const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
];

const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
];
    
const symbols = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

function generate() {
    let password1 = document.getElementById("password-1");
    let password2 = document.getElementById("password-2");
    password1.textContent = makePassword();
    password2.textContent = makePassword();
}

function makePassword() {
    let passwordLength = parseInt(document.getElementById("password-length").value);
    let includeNumbers = document.getElementById("include-numbers").checked;
    let includeSymbols = document.getElementById("include-symbols").checked;
    let characters = [];
    let password = ""
    if (includeNumbers === true && includeSymbols === false) {
        characters = letters.concat(numbers)
    } else if (includeSymbols === true && includeNumbers === false) {
        characters = letters.concat(symbols)
    } else if (includeNumbers === true && includeSymbols === true) {
        characters = letters.concat(numbers, symbols)
    } else {
        characters = letters
    };
    for (let i = 0; i < passwordLength; i++) {   
        let randomNumber = Math.floor( Math.random() * characters.length);
        let randomCharacter = characters[randomNumber];
        password += randomCharacter;
    };
    return password;
}

function copyPassword1() {
  const password1 = document.getElementById("password-1");
  const originalText = password1.textContent;
  navigator.clipboard.writeText(originalText);
  password1.textContent = "Copied!";
  setTimeout(() => {
    password1.textContent = originalText;
  }, 1000);
}

function copyPassword2() {
  const password2 = document.getElementById("password-2");
  const originalText = password2.textContent;
  navigator.clipboard.writeText(originalText);
  password2.textContent = "Copied!";
  setTimeout(() => {
    password2.textContent = originalText;
  }, 1000);
}