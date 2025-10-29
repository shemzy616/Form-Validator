const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const isRequiredValid = checkRequired([username, email, password, confirmPassword]);

    let isFormValid = isRequiredValid;
    if (isRequiredValid) {
        const isEmailValid = checkEmail(email);
        const isPasswordLengthValid = checkLength(password, 6, 25);
        const isPasswordsMatch = checkPasswordsMatch(password, confirmPassword);
        const isUsernameValid = checkLength(username, 3, 15);

        isFormValid = isEmailValid && isPasswordLengthValid && isPasswordsMatch && isUsernameValid;
    }
    
    if (isFormValid) {
        alert("Registration successful!");
        form.reset();

        document.querySelectorAll(".form-group").forEach(group => {
            group.className = "form-group";
        });
    }
}); // Missing closing brace and parenthesis added here

function checkPasswordsMatch(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    } else {
        showSuccess(confirmPasswordInput);
        return true;
    }
}

function checkEmail(input) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(input.value.trim())) { // Changed from email.value to input.value
        showSuccess(input); // Changed from email to input
        return true;
    } else {
        showError(input, "Email is not valid"); // Changed from email to input
        return false;
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${formatFieldName(input)} must be at least ${min} characters`);
        return false;
    } else if (input.value.length > max) {
        showError(input, `${formatFieldName(input)} must be less than ${max} characters`);
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

function checkRequired(inputArray) {
    let isValid = true;
    inputArray.forEach(input => {
        if (input.value.trim() === "") { // Fixed logic error: removed ! operator
            showError(input, `${formatFieldName(input)} is required`);
            isValid = false;
        } else {
            showSuccess(input);
        }
    });
    return isValid;
}

function formatFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1).replace("-", " ");
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const small = formGroup.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
}