let isClicked = false;

const inputElements = document.querySelectorAll("input[required]");

const submitButton = document.querySelector("button");

const pwdInput = document.querySelector('input[id="pwd"]');

const pwdConfirmInput = document.querySelector('input[id="pwdConfirm"]');

// Check if input has been clicked at least once and 
// if so, check if requirement has been fulfilled
inputElements.forEach(element => {
    element.addEventListener("click", () => { 
        if(element.value === "") { 
            element.classList.add("focused");
            element.classList.add("invalid");
        }
    });
    element.addEventListener("input", () => {
        if (element.value === "" && element.classList.contains("focused")) {            
            element.classList.add("invalid");
            console.log(element.required);
        } else {
            element.classList.remove("invalid");
        }

        console.log(element.value);
    });
});


submitButton.addEventListener("click", (e) => {
    if(pwdInput.value !== pwdConfirmInput.value) {
        e.preventDefault();
        pwdConfirmInput.classList.add("pwdInvalid");
    }
})