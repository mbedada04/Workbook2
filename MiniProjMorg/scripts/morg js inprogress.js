function () {
    //find element
    const loanAmount = document.getElementById("loanAmount");
    const interestRate = document.getElementById("interestRate");
    const termInYears = document.getElementById("termInYears")
    const 
    //get element's value or find input value
    let  = number1Field.value;
    let number2 = number2Field.value;
    //convert value to number
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let calculate = number1 - number2;
    const answerField = document.getElementById("answerField");
    answerField.value = calculate;