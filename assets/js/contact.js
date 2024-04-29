const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwnAV3pVWsDSob3IgptgUcBroZ-u0IoUMNHc-7CK7GUBpFZnO1aI1wCdTqlgeK19nV8LA/exec'

const form = document.forms['contact-form']
const submitButton = document.querySelector('input[type="submit"]');


form.addEventListener('submit', e => {
 e.preventDefault()
 submitButton.disabled = true;
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})