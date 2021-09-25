function calculateIt(){
    calcItArray = calcItArray.concat(document.getElementById('screen').innerText);
    let sum = 0;
    let newValue;
    let operator = "+";
    for (let i = 0; i < calcItArray.length; i++){
        if (!isNaN(calcItArray[i])) {
            newValue = +calcItArray[i];
            sum = calcIt(sum, operator, newValue);
        }
        else {
            operator = calcItArray[i];
        }
    }
    document.getElementById('screen').innerText = sum;
    calcItArray = [];
}
function calcIt (firstValue,operator,secondValue){
    let result = 0;
    switch (operator) {
        case "+":
            result = firstValue + secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        case "/":
            if (secondValue===0){
                result = "Can't divide by zero";
            } else {
            result = firstValue / secondValue;
                    }
            break;
        default:
            result = "invalid operator";
        };
    return result;
}
function screenDisplay (keyInput) {
    let value = document.getElementById(keyInput).innerText;
    let currentDisplay = document.getElementById('screen').innerText;
    if (currentDisplay == 0) {currentDisplay = value;}
        else {currentDisplay += value;}
    document.getElementById('screen').innerText = currentDisplay;
}
function clearAll () {
    document.getElementById('screen').innerText = 0;
    calcItArray = [];    
}
function operatorSelect (selectedOperator) {
    calcItArray = calcItArray.concat(document.getElementById('screen').innerText);
    calcItArray = calcItArray.concat(selectedOperator);
    document.getElementById('screen').innerText = 0;
}

let calcItArray = [];
document.getElementById('btn1').addEventListener('click',()=>{screenDisplay('btn1')});
document.getElementById('btn2').addEventListener('click',()=>{screenDisplay('btn2')});
document.getElementById('btn3').addEventListener('click',()=>{screenDisplay('btn3')});
document.getElementById('btn4').addEventListener('click',()=>{screenDisplay('btn4')});
document.getElementById('btn5').addEventListener('click',()=>{screenDisplay('btn5')});
document.getElementById('btn6').addEventListener('click',()=>{screenDisplay('btn6')});
document.getElementById('btn7').addEventListener('click',()=>{screenDisplay('btn7')});
document.getElementById('btn8').addEventListener('click',()=>{screenDisplay('btn8')});
document.getElementById('btn9').addEventListener('click',()=>{screenDisplay('btn9')});
document.getElementById('btn0').addEventListener('click',()=>{screenDisplay('btn0')});
document.getElementById('btnPlus').addEventListener('click',()=>{operatorSelect('+')});
document.getElementById('btnMinus').addEventListener('click',()=>{operatorSelect('-')});
document.getElementById('btnMultiply').addEventListener('click',()=>{operatorSelect('*')});
document.getElementById('btnDivide').addEventListener('click',()=>{operatorSelect('/')});
document.getElementById('btnEqual').addEventListener('click',calculateIt);
document.getElementById('btnClr').addEventListener('click',clearAll);