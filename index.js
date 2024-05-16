const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const zipError = document.querySelector(".zip-error");
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-error");
const confirmPassword = document.getElementById("confirm");
const confirmError = document.querySelector(".confirm-error");
const submitted = document.querySelector(".submitted");

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
const passwordRegex = /^(?=.*\d).{4,8}$/;

window.addEventListener("load", () => {
  const emailValid = email.value.length === 0 || emailRegex.test(email.value);
  email.className = emailValid ? "valid" : "invalid";
  const zipValid =
    zip.value.length === 0 ||
    zipRegex[0].test(zip.value) ||
    zipRegex[1].test(zip.value);
  zip.className = zipValid ? "valid" : "invalid";
  const passwordValid =
    password.value.length === 0 || passwordRegex.test(password.value);
  password.className = passwordValid ? "valid" : "invalid";
  const confirmValid =
    confirmPassword.value.length === 0 ||
    confirmPassword.value === password.value;
  confirmPassword.className = confirmValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const emailValid = email.value.length === 0 || emailRegex.test(email.value);
  if (emailValid) {
    email.className = "valid";
    emailError.textContent = "";
  } else {
    email.className = "invalid";
    emailError.textContent =
      "An valid email address is required - format name@host";
  }
});

zip.addEventListener("input", () => {
  let zipValid;
  if (country.value === "us") {
    zipValid = zip.value.length === 0 || zipRegex[0].test(zip.value);
  } else {
    zipValid = zip.value.length === 0 || zipRegex[1].test(zip.value);
  }

  if (zipValid) {
    zip.className = "valid";
    zipError.textContent = "";
  } else {
    zip.className = "invalid";
    zipError.textContent = "A valid zip code in US or UK format is required";
  }
});

password.addEventListener("input", () => {
  const passwordValid =
    password.value.length === 0 || passwordRegex.test(password.value);
  if (passwordValid) {
    password.className = "valid";
    passwordError.textContent = "";
  } else {
    password.className = "invalid";
    passwordError.textContent =
      "Password must be between 4 and 8 characters long and include at least one number";
  }
});

confirmPassword.addEventListener("input", () => {
  const confirmValid =
    confirmPassword.value.length === 0 ||
    confirmPassword.value === password.value;
  if (confirmValid) {
    confirmPassword.className = "valid";
    confirmError.textContent = "";
  } else {
    confirmPassword.className = "invalid";
    confirmError.textContent = "Passwords do not match!";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValid = email.value.length === 0 || emailRegex.test(email.value);
  if (!emailValid || email.value.length === 0) {
    email.className = "invalid";
    emailError.textContent =
      "An valid email address is required - format name@host";
  } else {
    email.className = "valid";
    emailError.textContent = "";
  }

  let zipValid;
  if (country.value === "us") {
    zipValid = zip.value.length === 0 || zipRegex[0].test(zip.value);
  } else {
    zipValid = zip.value.length === 0 || zipRegex[1].test(zip.value);
  }

  if (!zipValid || zip.value.length === 0) {
    zip.className = "invalid";
    zipError.textContent = "A valid zip code in US or UK format is required";
  } else {
    zip.className = "valid";
    zipError.textContent = "";
  }

  const passwordValid =
    password.value.length === 0 || passwordRegex.test(password.value);
  if (!passwordValid || password.value.length === 0) {
    password.className = "invalid";
    passwordError.textContent =
      "Password must be between 4 and 8 characters long and include at least one number";
  } else {
    password.className = "valid";
    passwordError.textContent = "";
  }

  const confirmValid =
    confirmPassword.value.length === 0 ||
    confirmPassword.value === password.value;
  if (!confirmValid || confirmPassword.value.length === 0) {
    confirmPassword.className = "invalid";
    confirmError.textContent = "Passwords do not match!";
  } else {
    confirmPassword.className = "valid";
    confirmError.textContent = "";
  }

  if (
    email.className === "valid" &&
    zip.className === "valid" &&
    password.className === "valid" &&
    confirmPassword.className === "valid"
  ) {
    submitted.style.display = "block";
  }
});
