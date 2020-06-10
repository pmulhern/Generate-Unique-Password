/*const result = document.getElementById('result')
const lengthEl = passLen
const uppercaseEl = useCap
const lowercaseEl = useLow
const NumberEl = useNum
const SymbolsEl = useSym
const generateEl = document.getElementById('generate')


const passChar = {
    lowerCase: getLower,
    upperCase: getUpper,
    symbols: getSymbol,
    numbers: getNumber, 
};

generateEl.addEventListener('click', () => {
    const passLen = lengthEl.value;

    console.log(passLen)
});*/

//GENERATE RANDOM LOWERCASE NUMBER

function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getLower());

//GENERATE RANDOM UPPERCASE NUMBER
function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getUpper());

//GENERATE RANDOM SYMBOL
function getSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
console.log(getSymbol());

//GENERATE RANDOM NUMBER
function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getNumber());

const userSelect = [getLower, getUpper, getSymbol, getNumber]
console.log(userSelect)

function clickEvent() {

//CONFIRM "QUESTIONS" WHICH WE WILL INCORPOARATE INTO PASSWORD GENERATE CALC
var useCap = confirm("Would you like capital Letters?");
console.log(useCap)
var useLow = confirm("Would you like to include lower case letters?")
console.log(useLow)
var useNum = confirm("Would you like to include numbers?")
console.log(useNum)
var useSym = confirm("would you like to include special characters?")
console.log(useSym)

//ASKS USER TO PICK A NUMBER BETWEEN 8 AND 128
do{
    var passLen = parseInt(window.prompt("Please enter a number from 8 to 128", ""), 10);
    }while(isNaN(passLen) || passLen > 128 || passLen < 8);
    document.getElementById("generate")
console.log(passLen)

if(useCap===true && useLow===true && useNum===true && useSym===true){
    document.write(passLen*4);

}
}



//generatePassword()