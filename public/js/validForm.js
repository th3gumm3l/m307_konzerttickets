document.getElementById('ConcertForm').onsubmit = function (evt) {

    //var
    var name = document.getElementById("name").value;
    var prename = document.getElementById("prename").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
    

    var error_name;
    var error_prename;
    var error_phone;
    var error_mail;
    var error_amount;
    
    console.log(name);
    console.log(prename);
    console.log(phone);
    console.log(mail);
    console.log(amount);

    alert("hallo1");

    //name
    error_name = checkEmpty(name, "Name");
    error_name = checklength(name, "Name", 30);
    error_name = checkSpecialChars(name, "Name");
    //prename
    error_prename = checkEmpty(prename, "Prename");
    error_prename = checklength(prename, "Prename", 30);
    error_prename = checkSpecialChars(prename, "Prename");
    //phone
    error_phone = checkEmpty(phone, "Phone");
    error_phone = checkPhoneNumber(phone, "Phone");
    //mail
    error_mail = checkEmpty(mail, "Mail");
    error_mail = checklength(mail, "Mail", 30);
    error_mail = checkMail(mail);
    //amount
    error_amount = checkEmpty(amount, "Amount");
    error_amount = checkNumberBetween(amount, "Amount", 1, 20);

    
    if (error_name != undefined || error_prename != undefined || error_phone != undefined || error_mail != undefined || error_artists != undefined || error_amount != undefined || error_simpathy != undefined) {
        alert("hallo435345");
        var name_err = document.getElementById("name_err");
        var prename_err = document.getElementById("prename_err");
        var phone_err = document.getElementById("phone_err");
        var mail_err = document.getElementById("mail_err");
        var amount_err = document.getElementById("amount_err");

        alert("hallo435345ewqeqeqe");
        name_err.innerHTML = error_name;
        prename_err.innerHTML = error_prename;
        phone_err.innerHTML = error_phone;
        //mail_err.innerHTML = error_mail;
        amount_err.innerHTML = error_amount;
        alert("khjagfkhasjgfklaf");
        
        evt.preventDefault();
    }
}





function checkEmpty(obj, objName) {
    if (obj.length == undefined) {
        return objName + " can not be empty";
    }
}

function checklength(obj, objName, objMaxlength) {
    if (obj.length > objMaxlength) {
        return objName + " is too long";
    }
}

function checkSpecialChars(obj, objName) {

    let specialChars = `-,:;?!<>'"()[]{}!@#$%^&*+`
    let IsSpecialCharsProof = true;

    for (const c of obj) {
        if (specialChars.includes(c)) nameIsSpecialCharsProof = false;
    }

    if (!IsSpecialCharsProof) {
        return objName + " cannot contain the following symbols: " + specialChars;
    }
}

function checkPhoneNumber(obj, objName) {

    let specialChars = `+-/()0123456789`
    let IsSpecialCharsProof = true;

    for (const c of obj) {
        if (!specialChars.includes(c)) nameIsSpecialCharsProof = false;
    }

    if (!IsSpecialCharsProof) {
        return objName + " can only contain the following symbols: " + specialChars;
    }
}

function checkMail(obj) {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(obj)) {
        // valid mail
    } else {
        return " Invalid mail ";
    }
}

function checkNumberBetween(obj, objName, min, max) {
    if (obj >= min) {
        return objName + " is too small";
    } else if (obj <= max) {
        return objName + " is too large";
    }
}