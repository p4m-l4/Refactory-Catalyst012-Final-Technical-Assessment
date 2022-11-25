const validate = (event) => {
  var firstName = document.getElementById('fname');
  // var lastName = document.getElementById('lname');
  var passWord = document.getElementById('password');
  var age = document.getElementById('age');
  var email = document.getElementById('email');

  var firstNameError = document.getElementById('firstnameerr');
  // var lastNameError = document.getElementById('lastnameerr');
  var passWordError = document.getElementById('passworderr');
  var ageError = document.getElementById('ageerr');
  var emailError = document.getElementById('emailerr');

  var error = 0;

//  Validation for role

  // const unregex = /^UF-([0-9]{3})+$/;
  
  // if (uniqueNum.value == "") {
  //   uniqueNum.style.border = '1px solid red';
  //   uniqueNumError.textContent = 'Please enter unique ID';
  //   uniqueNumError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else if (!(uniqueNum.value.match(unregex)))  {
  //   uniqueNum.style.border = '1px solid red';
  //   uniqueNumError.textContent = 'Unique number must follow UF-001 format';
  //   uniqueNumError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else {
  //   uniqueNum.style.border = '1px solid green';
  //   uniqueNumError.textContent = "";
  // }

  if (firstName.value == "") {
    firstName.style.border = '1px solid red';
    firstNameError.textContent = 'Please enter your First Name';
    firstNameError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
    // return 
    error++;
  } else {
    firstName.style.border = '1px solid green';
    firstNameError.textContent = "";
  }

  // if (lastName.value == "") {
  //   lastName.style.border = '1px solid red';
  //   lastNameError.textContent = 'Please enter your Last Name';
  //   lastNameError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   // return false
  //   error++
  // } else {
  //   lastName.style.border = '1px solid green';
  //   lastNameError.textContent = "";
  // }

  // if (age.value == "") {
  //   age.style.border = '1px solid red';
  //   ageError.textContent = "Please specify no. of years lived";
  //   ageError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else if (age.value < 18)  {
  //   age.style.border = '1px solid red';
  //   ageError.textContent = 'Sorry you are underage.';
  //   ageError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else {
  //   duration.style.border = '1px solid green';
  //   durationError.textContent = "";
  // }
  

  // if (phoneNum.value == "") {
  //   phoneNum.style.border = '1px solid red';
  //   phoneNumError.textContent = 'Please provide contact number';
  //   phoneNumError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else {
  //   phoneNum.style.border = '1px solid green';
  //   phoneNumError.textContent = "";
  // }

  // if (email.value == "") {
  //   email.style.border = '1px solid red';
  //   emailError.textContent = 'Please enter email address';
  //   emailError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else {
  //   email.style.border = '1px solid green';
  //   emailError.textContent = "";
  // }

  // if (passWord.value == "") {
  //   passWord.style.border = '1px solid red';
  //   passWordError.textContent = 'Please specify passWord';
  //   passWordError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else if (passWord.value.length < 5)  {
  //   passWord.style.border = '1px solid red';
  //   passWordError.textContent = 'Please password must be atleast 5 characters';
  //   passWordError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else if (passWord.value.length > 15)  {
  //   passWord.style.border = '1px solid red';
  //   passWordError.textContent = 'Please password must not be more than 15 characters';
  //   passWordError.style = 'color: red; font-size: 12px; font-family: Arial, Helvetica, Sans-serif;';
  //   return false
  // } else {
  //   passWord.style.border = '1px solid green';
  //   passWordError.textContent = "";
  // }

  if (error > 0) {
    event.preventDefault();
  }

}

document.getElementById('date').valueAsDate = new Date();