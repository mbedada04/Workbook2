"use strict"

window.onload = init;
function init() {
    const helloBtn = document.getElementById("greetBtn")
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    const nameField = document.getElementById("nameField");
    alert('hello ${nameField}');
    
}