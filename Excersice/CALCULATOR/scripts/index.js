function add() {
    //find element
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    //get element's value or find input value
    let number1 = number1Field.value;
    let number2 = number2Field.value;
    //convert value to number
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let answer = number1 + number2;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;

}

function subtract() {
     //find element
     const number1Field = document.getElementById("number1Field");
     const number2Field = document.getElementById("number2Field");
     //get element's value or find input value
     let number1 = number1Field.value;
     let number2 = number2Field.value;
     //convert value to number
     number1 = parseFloat(number1);
     number2 = parseFloat(number2);
     let answer = number1 - number2;
     const answerField = document.getElementById("answerField");
     answerField.value = answer;
}







 
    