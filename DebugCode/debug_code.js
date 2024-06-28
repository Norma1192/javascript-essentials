 function performOperation() {
     // Get user input from input fields
     let num1 = parseInt(document.getElementById('input1').value);
     let num2 = parseInt(document.getElementById('input2').value);
     // Check if inputs are valid numbers
     if (!isNaN(num1) && !isNaN(num2)) {
         // Perform the operation
         let result;
         let mul = multiply(num1, num2);
         let sum = add(num1, num2);
         let div = divide(num1, num2);

         result = {
            mul: mul,
            sum: sum,
            div: div
         }
         // Display the result
         displayResult(JSON.stringify(result));
     } else {
         displayResult('Please enter valid numbers');
     }
 }

 function multiply(a, b) {
     // Introduce a debugger statement to pause execution
     debugger;
     // Multiply the numbers
     return a * b;
 }

 function add(a, b) {
    debugger;
    return a + b;
 }

 function divide(a, b) {
    debugger;
    try {
        if (b == 0) throw "Number 2 must be diff of 0"
        const d = a / b;
        return parseFloat(d.toFixed(2));
    } catch(error) {
        console.error(error);
        return undefined;
        
    }
 }

 function displayResult(result) {
     // Display the result in the paragraph element
     const resultElement = document.getElementById('result');
     resultElement.textContent = `The result is: ${result}`;
 }