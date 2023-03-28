function error(element, message) {
    const form_grp = element.parentElement;
    const errorDisplay = form_grp.querySelector('.error');

    errorDisplay.innerText = message;
    form_grp.classList.add('error');
    form_grp.classList.remove('success');
}

function success(element,message) {
    const form_grp = element.parentElement;
    const errorDisplay = form_grp.querySelector('.error');

    errorDisplay.innerText = "";
    form_grp.classList.add('success');
    form_grp.classList.remove('error');
}

function regForm(str) {
    // First Name

    if (str.Fname.value == "") {
        // document.getElementById('msg1').innerHTML = "!Please Enter Your First Name";
        // str.Fname.focus();
        // return false;
        error(Fname, 'First Name is required');
        return false;        
    }
    else if (!str.Fname.value.match(/^[a-z,A-Z]{1,}$/)) {
        // document.getElementById('msg1').innerHTML = "!Please Enter First name in charcters";
        // str.Fname.focus();
        // return false;
        error (Fname, 'Please enter First Name in Alphabetical character');
        return false;
    }
    else
    {
        success(Fname);
    }

    // Last Name
    if (str.Lname.value == "") {
        // document.getElementById('msg1').innerHTML = "!Please Enter Your Last Name";
        // str.Lname.focus();
        // return false;
        error(Lname, 'Last Name is required');
        return false;

    }
    if (!str.Lname.value.match(/^[a-z,A-Z]{1,}$/)) {
        // document.getElementById('msg1').innerHTML = "!Please Enter Last name in charcters";
        // str.Lname.focus();
        // return false;
        error (Lname, 'Please enter Last Name in Alphabetical character');
        return false;
    }
    success(Lname);

    // Mobile Number
    if(str.Mnumber.value == ""){
        // document.getElementById('msg1').innerHTML = "!Please Enter Your Mobile Number";
        // str.Mnumber.focus();
        // return false;
        error(Mnumber, 'Mobile Number is required');
        return false;

    }
    if (!str.Mnumber.value.match(/^[0-9]{9,10}$/)) {
        // document.getElementById('msg1').innerHTML = "!Please Enter Valid Mobile No.";
        // str.Mnumber.focus();
        // return false;
        error(Mnumber, 'Mobile Number is not valid');
        return false;

    }

    success(Mnumber);
    

    // Email
    if (str.Email.value == "") {
        // document.getElementById('msg1').innerHTML = "! Please Enter Your Email";
        // str.Email.focus();
        // return false;
        error(Email, 'Email is required');
        return false;
    }
    if (!str.Email.value.match(/^[a-zA-z0-9_\.\-]+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]){2,4}$/)) {
        // document.getElementById('msg1').innerHTML = "!Please Enter Valid emailid";
        // str.Email.focus();
        // return false;
        error(Email, 'Email is not valid');
        return false;
    }

        success(Email);
    
    

    //Paasword and Confirm password
    if (str.Password.value == "") {
        // document.getElementById('msg1').innerHTML = "! Please Enter Password";
        // str.Password.focus();
        // return false;
        error(Password, 'Password is required');
        return false;

    }
    if (!(str.Password.value.length >3 & str.Password.value.length <8)) {
        // document.getElementById('msg1').innerHTML = "! Please Enter Valid Password";
        // str.Password.focus();
        // return false;
        error(Password, 'Password must be more than 3 and less than 8 value');
        return false;
    }

        success(Password);


    if (str.Cpassword.value == "") {
        // document.getElementById('msg1').innerHTML = "! Please Enter Password";
        // str.Cpassword.focus();
        // return false;
        error(Cpassword, 'Password is required');
        return false;
    }
    if (!(str.Cpassword.value == str.Password.value)) {
        // document.getElementById('msg1').innerHTML = "!Password Doesn't Match";
        // str.Cpassword.focus();
        // return false;
        error(Cpassword, "Password doesn't match");
        return false;
    }

        success(Cpassword);


    // Gender
    // var gender_arr = document.getElementsByName ("gender");
    // if (gender_arr[0].checked == true) {
    //     success(Gender1);
    // }
    // else if(gender_arr[1].checked == true){
    //     success(Gender2);
    // }
    // else {
    //     // document.getElementById('msg1').innerHTML = "!Please select gender";
    //     // return false;
    //     error(gender_arr[0,1], "Please Select Gender");
    // }

    // Country
    if (str.Country.value == "") {
        // document.getElementById('msg1').innerHTML = "! Please select Country";
        // str.Country.focus();
        // return false;
        error(Country, 'Choose Your Country');
        return false;
    }

        success(Country);

    // Education
    if (str.Education.value == "") {
        // document.getElementById('msg1').innerHTML = "! Please select education";
        // str.Education.focus();
        // return false;
        error(Education, 'Choose Your Education');
        return false;

    }

        success(Education);

    // Date Of Birth
    if (str.Dob.value == "") {
        // document.getElementById('msg1').innerHTML = "! Please Enter Date of birth";
        // str.Dob.focus();
        // return false;
        error(Dob, 'Choose Your Date of Birth');
        return false;

    }

        success(Dob);


    // PDF
    if (str.Cv.value == "") {
        // document.getElementById('msg1').innerHTML = "! Please upload CV";
        // str.Cv.focus();
        // return false;
        error(Cv, 'Upload your CV');
        return false;
    }

    var cv = document.getElementById('Cv'); 
    var cv_size_mb = parseFloat(cv.files[0].size / (1024 * 1024)).toFixed(2);
    if (cv_size_mb > 2) {
        // document.getElementById("msg1").innerHTML="! Please select resume size less than 2 MB ";
        // str.Cv.focus();
        // return false;
        error(Cv, "! Please select resume size less than 2 MB ");
        return false;
    }

    var fileName = getElementById('Cv').value;
    var ext = fileName.substring(fileName.lastIndexOf('.')+1);
    if (!ext == "pdf" || !ext == "PDF") {
        // document.getElementById("msg1").innerHTML="Success";
        // document.getElementById('submit').disabled = false;
        // return false;
        error(Cv, "! Please upload only pdf/PDF File ");
        return false;
    }
    success(Cv);

}

// function Check(file) {
//     var fileName = file.value;
//     var fileType = fileName.substring(fileName.lastIndexOf('.')+1);
//     if (fileType == "pdf" || fileType == "PDF") {
//         document.getElementById("msg1").innerHTML="Success";
//         document.getElementById('submit').disabled = false;
//     }
//     else
//     {
//         document.getElementById("msg1").innerHTML="! Please upload only pdf/PDF File";
//         document.getElementById('submit').disabled = true;
//     }
// }