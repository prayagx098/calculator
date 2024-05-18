let currentInput = '';
let operator = '';
let result = 0;
let DisplayInput='';

function appendNumber(number) {
  currentInput += number;
  DisplayInput =currentInput;
  console.log(currentInput)
  console.log(number)
  updateDisplay();

}

function setOperator(op) {
  operator = op;
  result = parseFloat(currentInput);
  currentInput += operator;
  DisplayInput=currentInput;
  currentInput = '';
  updateDisplay();
}

function clearLast(){
  backnum = currentInput;
  backnum=Math.floor(backnum / 10);
  currentInput=backnum;
  DisplayInput=currentInput;
  updateDisplay();

}

function calculate() {
  const inputNumber = parseFloat(currentInput);
  switch (operator) {
    case '+':
      result += inputNumber;
      break;
    case '-':
      result -= inputNumber;
      break;
    case '*':
      result *= inputNumber;
      break;
    case '/':
      if (inputNumber !== 0) {
        result /= inputNumber;
      } else {
        result = 'Error';
      }
      break;
    default:
      result = inputNumber;
  }
  DisplayInput = result.toString();
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  result = 0;
  DisplayInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = DisplayInput || '0';
}
