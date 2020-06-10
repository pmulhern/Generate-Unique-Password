//CODE IS USING THE JS CHAR CODE SYSTEM RESOURCE: https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
//RANDOM LOWERCASE LETTER
function generateRandomLowerCase() {
    return String.fromCharCode(generater(97, 122));
}
//RANDOM UPPERCASE LETTER
function generateRandomUpperCase() {
    return String.fromCharCode(generater(65, 90));
}
//RANDOM SYMBOL NOT BASED ON CHAR CODE
function generateRandomSymbol() {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[generater(0, symbols.length - 1)];
}

function generater(min = 0, max = 1) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// THE CODE BELOW WILL RUN WHEN USER CLICKS ON THE GENERATE PASSWORD BUTTON
function clickEvent() {

//DECALRING THE PASSWORD VARIABLE AND SETTING THE INITAL VALUE TO BLANK    
let password = "";

//CONFIRM "QUESTIONS" - ASKS USER WHICH VALUES THEY WOULD LIKE TO INCORPORATE INTO THE PASSWORD
var useCap = confirm("Would you like capital Letters?");
console.log(useCap)
var useLow = confirm("Would you like to include lower case letters?")
console.log(useLow)
var useNum = confirm("Would you like to include numbers?")
console.log(useNum)
var useSym = confirm("would you like to include special characters?")
console.log(useSym)

// THIS IS A CONTROL - FALSE BOOLEANS HAVE A NUMERIC VALUE OF 0 AND TRUE BOOLEANS A NUMERIC VALUE OF 1.  THE USER NEEDS TO PICK AT LEAST ONE VALUE. IF THE SUM OF ALL VALUES = 0 USER HAS NOT SELECTED AT LEAST ONE AND WILL RECEIVE ERROR MESSAGE.
if(useCap + useLow + useNum + useSym <= 0){
    alert("You need to select at least one of the following to continue: capital letters, lower case letters, numbers or special characters.")
    return;
}
else{

//ASKS USER TO PICK A NUMBER BETWEEN 8 AND 128. THIS CODE PREVENTS USER FROM PICKING A LETTER OR NUMBER OUTSIDE THE REQUIRED RANGE
do{
    var length = parseInt(window.prompt("Please enter a number from 8 to 128", ""), 10);
    }while(isNaN(length) || length > 128 || length < 8);
    document.getElementById("generate")
console.log(length)

//LOOP THAT IS TAKING ALL OF THE ABOVE INPUTS TO GENERATE THE RANDOM PASSSWORD
for (let i = 0; i < length; i++) {
    
    const r = generater(0, 3);
    if (useCap && r === 0) {
        password += generateRandomUpperCase();  
    } else if (useLow && r === 1) {
        password += generateRandomLowerCase(); 
    } else if (useSym && r === 2) {
        password += generateRandomSymbol(); 
    } else if (useNum && r === 3) {
        password += generater(0,9); 
    } else {
        i--;
    }

//WRITES OUR PASSWORD TO THE PAGE
document.getElementById('password').innerHTML = password;
}
}
//WRITES PASSWORD TO THE CONSOLE - MOVE THIS OR ADD A SECOND CONSOLE LOG TO LINE 68 TO SEE THE FOR LOOP LAYER EACH CHARACTER OF THE PASSWORD.
console.log(password);
}
