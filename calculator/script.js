// basic calculator 
const num1 = prompt('please enter the first number?');
const num2 = prompt('please enter the second number?');

function calculator(){
    const operator = prompt(`please enter the operator number?`);
    if(operator === '*'){
        console.log(num1 * num2);
    } else if(operator === '+'){
        console.log(num1 + num2);
    } else if(operator === '-'){
        console.log(num1 - num2);
    } else if(operator === '/'){
        console.log(num1/num2);
    } else{
        console.log('invalid operator!');
    }
}
  calculator()