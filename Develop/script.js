// Assignment code here

//Characters can be used for password
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//"abcdefghijklmnopqrstuvwxyz";
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//"0123456789"
var specialCharacters = ['!', '"', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
//"!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//  '\'
var randomCharacters = [];

//
function generatePassword() {

//set up the length of password
  lengthOfPassword = prompt("Please enter a valid number between 8-128 for your password.");
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(lengthOfPassword)) {
    lengthOfPassword = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + lengthOfPassword + " characters long.");
  }

  //contain uppercase characters
  uppercasePassword = confirm("Please choose if you want uppercase characters for your password.");
  if (uppercasePassword) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  //contain lowercase characters
  lowercasePassword = confirm("Please choose if you want lowercase characters for your password.");
  if (lowercasePassword) {
    alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  //contain numeric characters
  numericPassword = confirm("Please choose if you want to use numbers for your password.");
  if (numericPassword) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  //contain special characters
  specialPassword = confirm("Please choose if you want special characters for your password.");
  if (specialPassword) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  //contain non of above
  if (lowercasePassword === false && uppercasePassword === false && numericPassword === false && specialPassword === false) {
    return "Please select at least one character type.";
  };

  //merge chosen characters
  if (uppercasePassword) {
    randomCharacters = randomCharacters.concat(uppercaseCharacters);
  }
  if (lowercasePassword) {
    randomCharacters = randomCharacters.concat(lowercaseCharacters);
  }
  if (numericPassword) {
    randomCharacters = randomCharacters.concat(numericCharacters);
  }
  if (specialPassword) {
    randomCharacters = randomCharacters.concat(specialCharacters);
  }

  //display final password
  var finalPassword = "";

  for (var i = 0; i < lengthOfPassword; i++) {
    var randomPassword = [Math.floor(Math.random() * randomCharacters.length)];
    finalPassword += randomCharacters[randomPassword];
  }
  return finalPassword;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
