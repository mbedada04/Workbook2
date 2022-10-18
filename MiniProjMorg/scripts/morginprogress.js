function calculate () {
    //find element
    const loanAmountField = document.getElementById("loanAmount");
    const interestRateField = document.getElementById("interestRate");
    const termInYearsField = document.getElementById("termInYears")
    //get element's value or find input value
    let loanAmount = parseFloat(loanAmountField.value);
    let interestRate = parseFloat(interestRateField.value);
    let termInYears = parseFloat(termInYearsField.value);
    console.log(loanAmount,interestRate);

    // const answerField = document.getElementById("answerField");
    // answerField.value = calculate;
}