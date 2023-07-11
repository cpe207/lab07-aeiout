const first = document.querySelector("#first-name-input");
const last = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const submit = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

first.onkeyup = () => {
  first.classList.remove("is-invalid");
  first.classList.remove("is-valid");
};

last.onkeyup = () => {
  last.classList.remove("is-invalid");
  last.classList.remove("is-valid");
};

email.onkeyup = () => {
  email.classList.remove("is-invalid");
  email.classList.remove("is-valid");
};

password.onkeyup = () => {
  password.classList.remove("is-invalid");
  password.classList.remove("is-valid");
};

submit.onclick = () => {
  let chfirst = false;
  let chlast = false;
  let chemail = false;
  let chpass = false;

  if (first.value === "") {
    first.classList.add("is-invalid");
  } else {
    first.classList.add("is-valid");
    chfirst = true;
  }

  if (last.value === "") {
    last.classList.add("is-invalid");
  } else {
    last.classList.add("is-valid");
    chlast = true;
  }

  if (validateEmail(email.value)) {
    email.classList.add("is-valid");
    chemail = true;
  } else {
    email.classList.add("is-invalid");
  }

  if (password.value.length < 6) {
    password.classList.add("is-invalid");
  } else {
    password.classList.add("is-valid");
    chpass = true;
  }

  if (chfirst && chlast && chemail && chpass) {
    alert("Registered successfully");
  }
};
