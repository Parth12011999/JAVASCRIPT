var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('input-name').value;
    
    if(name.length == 0)
    {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[a-zA-Z]*\s{1}[a-zA-z]*$/)) {
        nameError.innerHTML = "Write Full Name";
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;

}

function validatePhone() {
    var phone = document.getElementById('input-phone').value;
    
    if(phone.length == 0)
    {
        phoneError.innerHTML = "Number is required";
        return false;
    }
    if (!phone.match(/^[0-9]{10,11}$/)) {
        phoneError.innerHTML = "Enter Valid Number in 10 digits";
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;

}

function validateEmail() {
    var email = document.getElementById('input-email').value;
    
    if(email.length == 0)
    {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9]*\@{1}[a-z]*\.{1}[a-z]*$/)) {
        emailError.innerHTML = "Enter Valid Email ID";
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}

function validateMsg() {
    var msg = document.getElementById('input-msg').value;
    var counter = 30;
    var done = counter - msg.length;

    if (done > 0) {
        msgError.innerHTML = `${done} character more required`;
        return false;
    }
    msgError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please enter valid details to submit";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}