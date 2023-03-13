//Available Character Sets
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialCharacters = "~!@#$%^&*()_-+={[}]|:;<,>.?/".split("");

// Generate Password Function
function generatePassword() {
  let passwordLength = parseInt(prompt
    ("How many characters are required? (8 - 128)"));
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      passwordLength = parseInt(prompt
        ("Please enter a number between 8 and 128?"));
      }

//Confirm Password Requirements
    var lowercaseRequired = confirm("Are lowercase letters required?");
    var uppercaseRequired = confirm("Are uppercase letters required?");
    var numbersRequired = confirm("Are numbers required?");
    var specialCharactersRequired = confirm("Are special characters required?");

  // Create Character Sets with the Selected Criteria
  let availableCharacters = [];

  if (lowercaseRequired) {
    availableCharacters = availableCharacters.concat(lowercase);
  }

  if (uppercaseRequired) {
    availableCharacters = availableCharacters.concat(uppercase);
  }

  if (numbersRequired) {
    availableCharacters = availableCharacters.concat(numbers);
  }

  if (specialCharactersRequired) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }

  // Generate password by randomization
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }

  return password;
}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
