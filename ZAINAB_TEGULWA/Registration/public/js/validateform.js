const ValidateForm = () => {
   const surName = document.getElementById('surname') 
   const givenName = document.getElementById('gname') 
   const tutle = document.getElementById('title') 
   const gender = document.getElementById('gender') 
   const DateOfBirth = document.getElementById('dob') 
   const country = document.getElementById('country') 
   const residence = document.getElementById('residence') 
   const natioanlity = document.getElementById('nationality') 

   const surNameError = document.getElementById('surnameerror') 
   const givenNameError = document.getElementById('gnameerror') 
   const tutleError = document.getElementById('titleerror') 
   const genderError = document.getElementById('gendererror') 
   const DateOfBirthError = document.getElementById('doberror') 
   const countryError = document.getElementById('countryerror') 
   const residenceError = document.getElementById('residenceerror') 
   const natioanlityError = document.getElementById('nationalityerror') 

    //  
    const alphabets = /^[a-zA-Z]+$/  

    // Validating Surname   

   if(surName.value === ''){
    surName.border.style = '1px solid red'
    surNameError.textContent = 'Invalid Field'
    surNameError.textContent.style = 'color: red'
    return false
   }else if(!(surName.value.match(alphabets))){
    surName.border.style = '1px solid red'
    surNameError.textContent = 'Invalid Field'
    surNameError.textContent.style = 'color: red'
    return false
   }else if(surName.value < 1 && surName.value > 16){
    surName.border.style = '1px solid red'
    surNameError.textContent = 'Invalid Field'
    surNameError.textContent.style = 'color: red'
    return false
   }else{
    surName.border.style = '1px solid green'
    surNameError.textContent = ''
   }
    // Validating Given Name  
   if(givenName.value === ''){
    givenName.border.style = '1px solid red'
    givenNameError.textContent = 'Invalid Field'
    givenNameError.textContent.style = 'color: red'
    return false
   }else if(!(givenName.value.match(alphabets))){
    givenName.border.style = '1px solid red'
    givenNameError.textContent = 'Invalid Field'
    givenNameError.textContent.style = 'color: red'
    return false
   }else if(givenName.value < 1 && surName.value > 16){
    givenName.border.style = '1px solid red'
    givenNameError.textContent = 'Invalid Field'
    givenNameError.textContent.style = 'color: red'
    return false
   }else{
    givenName.border.style = '1px solid green'
    givenNameError.textContent = ''
   }
    // Validating Ttitle  
   if(tutle.value === ''){
    tutle.border.style = '1px solid red'
    tutleError.textContent = 'Invalid Field'
    tutleError.textContent.style = 'color: red'
    return false
   }else{
    tutle.border.style = '1px solid green'
    tutleError.textContent = ''
   }
   if(gender.value === ''){
    gender.border.style = '1px solid red'
    genderError.textContent = 'Invalid Field'
    genderError.textContent.style = 'color: red'
    return false
   }else{
    gender.border.style = '1px solid green'
    genderError.textContent = ''
   }
   if(DateOfBirth.value === ''){
    DateOfBirth.border.style = '1px solid red'
    DateOfBirthError.textContent = 'Invalid Field'
    genderError.textContent.style = 'color: red'
    return false
   }else{
    DateOfBirth.border.style = '1px solid green'
    DateOfBirthError.textContent = ''
   }
   if(country.value === ''){
    country.border.style = '1px solid red'
    countryError.textContent = 'Invalid Field'
    countryError.textContent.style = 'color: red'
    return false
   }else{
    country.border.style = '1px solid green'
    countryError.textContent = ''
   }
}

const btn = document.getElementById('signup')

btn.addEventListener('submit', (event) => {
    event.preventDefault()
    ValidateForm()
})