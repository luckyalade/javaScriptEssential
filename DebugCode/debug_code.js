function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Display the result in the paragraph elements
    const multiplyResultElement = document.getElementById('multiplyResult');
    const addResultElement = document.getElementById('addResult');
    const divideResultElement = document.getElementById('divideResult');

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        const multiplyResult = multiply(num1, num2);
        const addResult = add(num1, num2);
        const divideResult = divide(num1, num2);

        // Display the result
        displayResult(multiplyResultElement, `The result of ${num1} multiply by ${num2} is: ${multiplyResult}`);
        displayResult(addResultElement, `The result of ${num1} plus ${num2} is: ${addResult}`);
        displayResult(divideResultElement, `The result of ${num1} divided by ${num2} is: ${divideResult}`);
    } else {
        displayResult(multiplyResultElement, 'Please enter a valid number for both inputs');
        displayResult(addResultElement, '');
        displayResult(divideResultElement, '');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide the numbers
    return a / b;
}

function displayResult(element, result) {
    element.textContent = result;
}
