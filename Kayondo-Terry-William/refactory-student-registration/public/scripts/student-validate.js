const photo = document.getElementById("photo");

photo.onchange = function () {
  let file = this.files[0];

  if (!file.type.startsWith("image/")) return;

  const img = document.createElement("img");

  img.classList.add("obj");
  img.file = file;

  const preview = document.getElementById("preview");

  preview.appendChild(img);

  const reader = new FileReader();
  reader.onload = (e) => {
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

const validators = {
  surName: validateSurName,
  givenName: validateGivenName,
  photo: validatePhoto,
  dateOfBirth: validateDateOfBirth,
  country: validateCountry,
  placeOfResidence: validatePlaceOfResidence,
  nationality: validateNationality,
};

const registerForm = document.getElementById("new-student");

registerForm.onsubmit = function () {
  const shouldSubmit = Object.keys(validators).reduce(
    (acc, key) => validateInput(key, validators[key]) && acc,
    true
  );

  return !validateGender() && shouldSubmit;
};

function validateInput(inputId, validate) {
  const inputElement = document.getElementById(inputId);
  const inputValue = inputElement.value;
  const inputError = document.getElementById(`${inputId}-error`);

  inputError.textContent = validate(inputValue);
  inputElement.classList.add("border-danger");

  return !inputError.textContent;
}

Object.keys(validators).forEach((key) => {
  const input = document.getElementById(key);
  const inputError = document.getElementById(`${key}-error`);

  try {
    input.oninput = function () {
      inputError.textContent = "";
      input.classList.remove("border-danger");
    };
  } catch (err) {
    console.log(key);
    console.error(err);
  }
});

function validateSurName(value) {
  const surName = value && value.trim();

  if (!surName) return "Invalid Field!!";

  if (surName.length < 2)
    return "Sur name should have a minimum of 2 characters";

  if (surName.length > 15)
    return "Sur name should have a maximum of 15 characters";

  const regex = /^[a-zA-Z]{2,15}$/;

  if (!regex.test(surName))
    return `Sur name should have 2-15 "Alphabet" characters`;

  return "";
}
function validateGivenName(value) {
  const givenName = value && value.trim();

  if (!givenName) return "Invalid Field!!";

  if (givenName.length < 2)
    return "Given name should have a minimum of 2 characters";

  if (givenName.length > 15)
    return "Given name should have a maximum of 15 characters";

  const regex = /^[a-zA-Z]{2,15}$/;

  if (!regex.test(givenName))
    return `Given name should have 2-15 "Alphabet" characters`;

  return "";
}
function validatePhoto(value) {
  const photo = value;

  if (!photo) return "Invalid Field!!";

  return "";
}
function validateGender() {
  const radioButtons = document.querySelectorAll('input[name="gender"]');
  const genderElement = document.getElementById(`gender`);
  const genderError = document.getElementById(`gender-error`);

  let gender;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      gender = radioButton.value;
      break;
    }
  }
  if (!gender) {
    genderElement.classList.add("border-danger");
    const error = "Invalid Field!!";
    genderError.textContent = error;
    return error;
  }
  const genders = ["Male", "Female"];

  if (!genders.includes(gender)) {
    genderElement.classList.add("border-danger");
    const error = "Gender is Male of Female";
    genderError.textContent = error;
    return error;
  }

  genderElement.classList.remove("border-danger");
  genderError.textContent = "";
  return "";
}
function validateDateOfBirth(value) {
  const dateOfBirth = value && value.trim();

  if (!dateOfBirth) return "Invalid Field!!";

  const age = dayjs().diff(dayjs(dateOfBirth), "year");

  if (age < 16) return "Student should be at least 16 years old";

  if (age > 150) return "Student should be at most 150 years old";
}

function validateCountry(value) {
  const country = value && value.trim();

  if (!country) return "Invalid Field!!";

  const countries = ["Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi"];

  if (!countries.includes(country))
    return `Country should be one of "Uganda", Kenya, Tanzania, Rwanda, Burundi"`;

  return "";
}
function validatePlaceOfResidence(value) {
  const placeOfResidence = value;

  if (!placeOfResidence) return "Invalid Field!!";

  return "";
}
function validateNationality(value) {
  const nationality = value;

  if (!nationality) return "Invalid Field!!";

  if (nationality.length < 6)
    return "Nationality should have a minimum of 6 characters";

  if (nationality.length > 19)
    return "Nationality should have a maximum of 19 characters";

  const regex = /^[a-zA-Z]{6,19}$/;

  if (!regex.test(nationality))
    return `Nationality should have 6-19 "Alphabet" characters`;

  return "";
}
