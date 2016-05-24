var app = require('./app.js')
var readline = require('readline-sync');
var x = readline.question("Please enter in a number: ");
var y = readline.question("please enter in another numnber: ");
var operator = readline.question("Please enter in your operation(+, -, / , or * ): ");
var num1 = parseInt(x);
var num2 = parseInt(y);

function calculator(operator) {
  switch (operator) {
    case "+":
      app.add(num1, num2);
      break;
      case "-":
        app.subtract(num1, num2);
        break;
        case "*":
          app.multiply(num1, num2);
          break;
        case "/":
          app.divide(num1, num2);
          break;
    default:" "
    console.log("error, please put in a operation");
      break;
  }

}
calculator(operator);
