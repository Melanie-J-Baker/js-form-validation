const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const zipError = document.querySelector(".zip-error")
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-error");
const confirm = document.getElementById("confirm");
const confirmError = document.querySelector(".confirm-error");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const countryRegex = /^[a-zA-Z\s]*$/;
const zipRegex = [/\d{5}([ \-]\d{4})?/, /GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4}/]

window.addEventListener("load", () => {
    const emailValid = email.value.length === 0 || emailRegex.test(email.value);
    email.className = emailValid ? "valid" : "invalid";
    const zipValid = zip.value.length === 0 || zipRegex[0].test(zip.value) || zipRegex[1].test(zip.value);
    zip.className = zipValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
    const emailValid = email.value.length === 0 || emailRegex.test(email.value);
    if (emailValid) {
        email.className = "valid";
        emailError.textContent = "";
    } else {
        email.className = "invalid";
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
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValid = email.value.length === 0 || emailRegex.test(email.value);
    if (!emailValid) {
        email.className = "invalid";
        emailError.textContent = "An valid email address is required - format name@host";
        emailError.style.display = "block";
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

    if (!zipValid) {
        zip.className = "invalid";
        zipError.textContent = "A valid zip code in US or UK format is required";
        zipError.style.display = "block";
    } else {
        zip.className = "valid";
        zipError.textContent = "";
    }
});