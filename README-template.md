# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This was one of the intresting challenge which needs to validate the user entries in the input fields and weather they match with the requirement mentioned in the case. 

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/128151248-3ce85c2c-8013-4b3b-a822-74c1fb13015d.png)
![image](https://user-images.githubusercontent.com/42742924/128151269-1f970d21-9538-4557-a825-f772075b4b6c.png)

### Links

- Solution URL: [https://github.com/Skyz03/Intro-signup-form]
- Live Site URL: [https://skyz03.github.io/Intro-signup-form/]

## My process:
Firstly, I built the Layout for both desktop and Mobile version then I Applied the JS form validation for all the elements and posted the reqired message.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Client Side Form Validation

### What I learned

The main thing I learned from this challange is the use of client side form validation where different loops and conditions are used to validate the entry by users.

To see how you can add code snippets, see below:

```html
<input class="form-input" type="text" name="first" placeholder="First Name" required>
<span class="error"></span>
```
```css psedo Element

input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  left: 20vw;
  bottom: 1.7rem;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: url(images/icon-error.svg);
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
}
```
```js
function showError() {

        if (inputFields.name == "first") {
            errorFields.textContent = "First Name cannot be empty";
        }
}
```

### Continued development

It size expansion can be made constant and have for detail valuation like @email.idl should also be validated wrong.

### Useful resources

- [UI CSS pseudo class](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes) - This helped me for cross checking the valid or invalid element and give them the respective border class and img.
- [Client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This is an amazing article which helped me complete the from validation with some modification by adding necessary loops.



## Author

- Website - Skyz03
