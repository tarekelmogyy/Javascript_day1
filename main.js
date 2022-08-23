var show = alert("This calculator only has a summation feature");
console.log(show);
var result;
var operator = prompt('Enter operator ( + ) ');
var number1 = parseFloat(prompt("Enter the first number"));
console.log(number1);
var number2 = parseFloat(prompt("Enter the second number"));
console.log(number2);
switch(operator){
    case '+' :
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    default :
        console.log("Operator is invalid");
        break;
}

alert(`The Summation result is ${number1} + ${number2} = ${result}`);




