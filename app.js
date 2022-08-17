const form = document.querySelector('#form');
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.card-name');
const cardMonth = document.querySelector('.month');
const cardYear = document.querySelector('.year');
const cardCvc = document.querySelector('.card-cvc');
const cardInputName = document.querySelector('#card-name');
const cardInputNumber = document.querySelector('#card-number');
const cardInputMonth = document.querySelector('#card-month');
const cardInputYear = document.querySelector('#card-year');
const cardInputCvc = document.querySelector('#card-cvc');
const complete = document.querySelector('.complete');
const btnContinue = document.querySelector('.continue');

// Submit event listener
form.addEventListener('submit', e => {
    if(cardInputName.value === ''){
        validate();
    } else if(cardInputNumber.value === ''){
        validate();
    } else if(isNaN(cardInputNumber.value)){
        validate();
    } else if(cardInputNumber.value.length !== 16){
        validate();
    } else if(cardInputYear.value === ''){
        validate();
    } else if(cardInputMonth.value === ''){
        validate();
    } else if(cardInputCvc.value === ''){
        validate();
    } else{
        form.style.display = 'none';
        complete.style.display = 'block';
    }


    e.preventDefault();
});

btnContinue.addEventListener('click', () => {
    window.location.reload();
})

function validate(){
    const cardInputNameValue = document.querySelector('#card-name').value.trim();
    const cardInputNumberValue = document.querySelector('#card-number').value.trim();
    const cardInputMonthValue = document.querySelector('#card-month').value.trim();
    const cardInputYearValue = document.querySelector('#card-year').value.trim();
    const cardInputCvcValue = document.querySelector('#card-cvc').value.trim();

    // Card name value validation
    if(cardInputNameValue == ''){
        setError(cardInputName, "Cant't be blank");
    } else{
        setSuccess(cardInputName)
    }

    // card number value validation
    if(cardInputNumberValue == ''){
        setError(cardInputNumber, "Cant't be blank");
    } else if(isNaN(cardInputNumberValue)){
        setError(cardInputNumber, "Wrong format, numbers only");
    } else if(cardInputNumberValue.length !== 16){
        setError(cardInputNumber, "Invalid number");
    } else{
        setSuccess(cardInputNumber)
    }

    // card year value validation
    if(cardInputYearValue == ''){
        setErrorForDate(cardInputYear, "Cant't be blank");
    } else{
        setSuccessForDate(cardInputYear)
    }

    // card month value validation
    if(cardInputMonthValue == ''){
        setErrorForDate(cardInputMonth, "Cant't be blank");
    } else{
        setSuccessForDate(cardInputMonth)
    }

    // card cvc value validation
    if(cardInputCvcValue == ''){
        setErrorForCvc(cardInputCvc, "Cant't be blank");
    } else if(isNaN(cardInputCvcValue)){
        setErrorForCvc(cardInputCvc, "Wrong format, numbers only");
    } else{
        setSuccessForCvc(cardInputCvc)
    }

}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.textContent = message;
}

function setErrorForDate(input, message){
        const formControl = input.parentElement.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control inner-input error';
        small.textContent = message;
}

function setErrorForCvc(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control inner-input error';
    small.textContent = message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function setSuccessForDate(input){
    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-control inner-input success';
}

function setSuccessForCvc(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control inner-input success';
}

// Display card details on card
cardInputName.addEventListener('input', () =>{
    cardName.innerText = cardInputName.value;
});

cardInputNumber.addEventListener('input', () =>{
    const value = cardInputNumber.value;
    const group1 = value.substr(0, 4);
    const group2 = value.substr(4, 4);
    const group3 = value.substr(8, 4);
    const group4 = value.substr(12, 4);
    cardNumber.textContent = group1 + ' ' + group2 + ' ' + group3 + ' ' +group4;
});

cardInputMonth.addEventListener('input', () =>{
    cardMonth.textContent = cardInputMonth.value;
});

cardInputYear.addEventListener('input', () =>{
    cardYear.textContent = cardInputYear.value;
});

cardInputCvc.addEventListener('input', () =>{
    cardCvc.textContent = cardInputCvc.value;
});