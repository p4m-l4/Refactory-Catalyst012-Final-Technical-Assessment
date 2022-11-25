const ValidatInputs = (event) =>{
    let val = 0

    const surname = document.getElementById('surname');
    const givenname = document.getElementById('givenname');
    const title = document.getElementById('title');
    const gender = document.getElementById('gender');
    const dateofbirth = document.getElementById('dateofbirth');
    const country = document.getElementById('country');
    const residence = document.getElementById('residence');
    const nationality = document.getElementById('nationality');

    
    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    const error4 = document.getElementById('error4');
    const error5 = document.getElementById('error5');
    const error6 = document.getElementById('error6');
    const error7 = document.getElementById('error7');
    const error8 = document.getElementById('error8');

    if(surname.value.trim() === ''){
        surname.style.boder = '2px solid red'
        error1.lastElementChild.innerText = 'Invalid field'
        val++
    }else{
        surname.style.boder = '2px solid green'
        error1.lastElementChild.innerText = ''
    }

    if(val >0){
        event.preventDefault()
    }
}