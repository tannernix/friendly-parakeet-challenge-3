// Finished Assignment code here

// All my global variables for my later functions
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var choiceOption = [];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','[',']'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];


// Added a console.log to help me early on
function generatePassword() {
  console.log("Test click")
  var password = "";
  for(var i=0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choiceOption.length);
    password = password + choiceOption[randomCharacter];
  }
  return password;
}

// Function to set all my prompts with right criteria
function openPrompts() {
  choiceOption = [];
  passwordLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128)"));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length needs to be between 8 - 128 digits. Please try again.");
    return false;
  }
  if (confirm("Would you like to include lowercase letters?")) {
    choiceOption = choiceOption.concat(lowerCase);
  }
  if (confirm("Would you like to include uppercase letters?")) {
    choiceOption = choiceOption.concat(upperCase);
  }
  if (confirm("Would you like to include special characters?")) {
    choiceOption = choiceOption.concat(specialCharacters);
  }
  if (confirm("Would you like to include numbers?")) {
    choiceOption = choiceOption.concat(number);
  }
  return true;
}

// Function for the final write password at the end
function writePassword() {
  var finalPrompts = openPrompts(); 

  if(finalPrompts) {
    var finalPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = finalPassword;
  } 
}

// Execuding all the js here
generateBtn.addEventListener("click", writePassword);
