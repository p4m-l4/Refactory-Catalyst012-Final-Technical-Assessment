const applicationForm = (event) =>{
    const surName = document.getElementById("surname");
    const giveName = document.getElementById("givename");
    const title = document.getElementById("title");


    const surNameError = document.getElementById("surnameError");
    const giveNameError = document.getElementById("givenameError");
    const titleError = document.getElementById("titleError");

    let error = 0;

    let alphaRegex = /^[A-Za-z]+$/;
    let surnameValue = surName.value.trim();
    if (surnameValue == "") {
        surName.style.border = "1px solid red";
        surNameError.textContent = "invalid Feild";
        surNameError.style = "color:red; font-size:11px;";
        error++
	}else if (!surnameValue.match(alphaRegex)) {
        surName.style.border = "1px solid red";
		surNameError.textContent = "Surname Should not be only letters";
		surNameError.style = "color:red; font-size:11px;";
		error++;
	} else {
		surName.style.border = "1px solid green";
		surNameError.textContent = "";
	}
    let giveNameValue = giveName.value.trim();
    if (giveNameValue == "") {
		giveName.style.border = "1px solid red";
		giveNameError.textContent = "invalid Feild";
		giveNameError.style = "color:red; font-size:11px;";
		error++;
	} else {
		giveName.style.border = "1px solid green";
		giveNameError.textContent = "";
	}

    let titleValue = title.value.trim();
	if (titleValue == "selecttitle") {
		title.style.border = "1px solid red";
		titleError.textContent = "invalid Feild";
		titleError.style = "color:red; font-size:11px;";
		error++;
	} else {
		title.style.border = "1px solid green";
		titleError.textContent = "";
	}

    if(error > 0){
        event.preventDefault();
    }
}