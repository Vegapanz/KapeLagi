var emailLabel = document.getElementById("email-label")
var emailInput = document.getElementById("email-input")
var emailError = document.getElementById("email-error")

function validateEmail(){


    if(!emailInput.value    .match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please enter a valid email";
        emailInput.style.borderColor = "red";
        emailError.style.top = "120%";
        return false;
    }

    emailError.innerHTML = "";
    emailInput.style.borderColor = "green";
    emailError.style.top = "100";
    return true;
}