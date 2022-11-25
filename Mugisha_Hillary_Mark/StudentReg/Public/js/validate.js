
const formValidate = () =>{
let val = 0;

var surname = document.getElementById('surname')
var givenname = document.getElementById('givenname')
var title = document.getElementById('title')
var dob = document.getElementById('dob')
var country = document.getElementById('country')
var por = document.getElementById('por')
var nationality = document.getElementById('nationality')


var surNameError = document.getElementById('surNameError')
var givenNameError = document.getElementById('givenNameError')
var titleError = document.getElementById('titleError')
var dobError = document.getElementById('dobError')
var countryError = document.getElementById('countryError')
var porError = document.getElementById('porError')
var nationalityError = document.getElementById('nationalityError')

//Surname
if(surname.value == ''){
    surname.style.border = '1px solid red'
    surNameError.textContent = 'Enter surname'
    surNameError.style ="color:red; font-size:10px font-family:Sans-serif;";
    val++
}else if(surname.value.length < 5||surname.value.length > 20){
    surNameError.textContent = 'Name between 5-20 characters'
    surNameError.style ="color:red; font-size:10px; font-family:Sans-serif;";
    val++
}else{
    surname.style.border='1px solid green';
    surNameError.textContent = '';
}

//Given Name
if(givenname.value == ''){
    givenname.style.border = '1px solid red'
    givenNameError.textContent = 'Enter surname'
    givenNameError.style ="color:red; font-size:10px font-family:Sans-serif;";
    val++
}else if(givenname.value.length < 5||givenname.value.length > 20){
    givenNameError.textContent = 'Name between 5-20 characters'
    givenNameError.style ="color:red; font-size:10px; font-family:Sans-serif;";
    val++
}else{
    givenname.style.border='1px solid green';
    givenNameError.textContent = '';
}

//Title
if(title.value == ''){
    title.style.border = '1px solid red'
    titleError.textContent = 'Enter surname'
    titleError.style ="color:red; font-size:10px font-family:Sans-serif;";
    val++
}else{
    title.style.border='1px solid green';
    titleError.textContent = '';
}

//Country
if(country.value == ''){
    country.style.border = '1px solid red'
    countryError.textContent = 'Enter country name'
    countryError.style ="color:red; font-size:10px font-family:Sans-serif;";
    val++
}else{
    country.style.border='1px solid green';
    countryError.textContent = '';
}

//Place of residence
if(por.value == ''){
    por.style.border = '1px solid red'
    porError.textContent = 'Enter place of residenc'
    porError.style ="color:red; font-size:10px font-family:Sans-serif;";
    val++
}else{
    por.style.border='1px solid green';
    porError.textContent = '';
}

//Nationality
if(nationality.value == ''){
    nationality.style.border = '1px solid red'
    nationalityError.textContent = 'Enter nationality'
    nationalityError.style ="color:red; font-size:10px font-family:Sans-serif;";
    val++
}else{
    nationality.style.border='1px solid green';
    nationalityError.textContent = '';
}

//dob
    if(dob.value == ''){
        dob.style.border = '1px solid red'
        dobError.textContent = 'Enter date of birth'
        dobError.style ="color:red; font-size:10px font-family:Sans-serif;";
        val++
    }else{
        dob.style.border='1px solid green';
        dobError.textContent = '';
}
    if(val>0){
        event.preventDefault()
    }
}
