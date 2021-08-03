
const form = document.getElementsByTagName('form')[0];

// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + .error');


// email.addEventListener('input', function (event) {
//     // Each time the user types something, we check if the
//     // form fields are valid.

//     if (email.validity.valid) {
//         // In case there is an error message visible, if the field
//         // is valid, we remove the error message.
//         emailError.textContent = ''; // Reset the content of the message
//         emailError.className = 'error'; // Reset the visual state of the message
//     } else {
//         // If there is still an error, show the correct error
//         showError();
//     }
// });

// form.addEventListener('submit', function (event) {
//     // if the email field is valid, we let the form submit

//     if (!email.validity.valid) {
//         // If it isn't, we display an appropriate error message
//         showError();
//         // Then we prevent the form from being sent by canceling the event
//         event.preventDefault();
//     }
// });

// function showError() {

//     if (email.validity.valueMissing) {
//         // If the field is empty,
//         // display the following error message.
//         emailError.textContent = 'You need to enter an e-mail address.';
//     } else if (email.validity.typeMismatch) {
//         // If the field doesn't contain an email address,
//         // display the following error message.
//         emailError.textContent = 'Entered value needs to be an e-mail address.';
//     } else if (email.validity.tooShort) {
//         // If the data is too short,
//         // display the following error message.
//         emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//     }

//     // Set the styling appropriately
//     emailError.className = 'error active';

// }


// Loop Start 


let numberOfInputs = document.querySelectorAll(".form-input").length;
let numberOfSpans = document.querySelectorAll(".error").length;


for (let i = 0; i < numberOfInputs; i++) {

    const inputFields = document.querySelectorAll(".form-input")[i];

    const errorFields = document.querySelectorAll(".error")[i];

    inputFields.addEventListener('input', function (event) {
        // Each time the user types something, we check if the
        // form fields are valid.

        if (inputFields.validity.valid) {
            // In case there is an error message visible, if the field
            // is valid, we remove the error message.
            errorFields.textContent = ''; // Reset the content of the message
            errorFields.className = 'error'; // Reset the visual state of the message
        } else {
            // If there is still an error, show the correct error
            showError();
        }
    });


    form.addEventListener('submit', function (event) {
        // if the email field is valid, we let the form submit

        if (!inputFields.validity.valid) {
            // If it isn't, we display an appropriate error message
            showError();
            // Then we prevent the form from being sent by canceling the event
            event.preventDefault();
        }
    });


    function showError() {

        if (inputFields.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            errorFields.textContent = 'You need to enter an e-mail address.';
        } else if (inputFields.validity.typeMismatch) {
            // If the field doesn't contain an email address,
            // display the following error message.
            errorFields.textContent = 'Entered value needs to be an e-mail address.';
        } else if (inputFields.validity.tooShort) {
            // If the data is too short,
            // display the following error message.
            errorFields.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        }

        // Set the styling appropriately
        errorFields.className = 'error active';

    }


}