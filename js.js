function validitycheck(formfield){
    var patt = new RegExp("[a-zA-Z]{2,}");
    console.log(patt.test(formfield.value));
    if(formfield.value ==""){
        formfield.style.border = "";
    }
    else if(patt.test(formfield.value)){
        formfield.style.border = "2px solid greenyellow";
    }
    else{
        formfield.style.border = "2px solid red";
    }
    console.log(formfield.style.borderColor);
}

function phvaliditycheck(formfield){
    var patt = new RegExp("[0-9]{8,10}");
    console.log(patt.test(formfield.value));
    if(formfield.value ==""){
        formfield.style.border = "";
    }
    else if(patt.test(formfield.value)){
        formfield.style.border = "2px solid greenyellow";
        
    }
    else{
        formfield.style.border = "2px solid red";
    }
    console.log(formfield.style.borderColor);
}

function Emailvaliditycheck(formfield){
    var patt = new RegExp(".+@.+[.].+");
    console.log(patt.test(formfield.value));
    if(formfield.value ==""){
        formfield.style.border = "";
    }
    else if(patt.test(formfield.value)){
        formfield.style.border = "2px solid greenyellow";
    }
    else{
        formfield.style.border = " 2px solid red";
    }
}

function ValidateForm(){
    var regpatt = new RegExp("[a-zA-Z]{2,}");
    var emailpatt = new RegExp(".+@.+[.].+");

    var errFirst = document.getElementById("firstname");
    var errLast = document.getElementById("lastname");
    var errEmail = document.getElementById("email");
    var errPhone = document.getElementById("phone");
    var errOrg = document.getElementById("organisation");
    var errMsg = document.getElementById("message");

    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var email = document.getElementById("emailinput");
    var phone = document.getElementById("ph");
    var org = document.getElementById("org");
    var msg = document.getElementById("msg");

    console.log(first.style.borderColor)

    if(first.style.borderColor == "greenyellow"){
        console.log("good");
        return
    }
    else{
        console.log("bad");
    }
}