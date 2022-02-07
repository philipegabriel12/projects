var showPassword = document.getElementById("showPassword");
var passwordInput = document.getElementById("password");
var emailInput = document.getElementById("email");
showPassword.setAttribute('data-before', "Show password?");

function showPasswordFunction(event){
    if (passwordInput.type == "password"){
        event.target.setAttribute('data-before', "Hide password?")
        passwordInput.type = "text";

    } else {
        passwordInput.type = "password";
        event.target.setAttribute('data-before', "Show password?")
    }
}

document.addEventListener('focus', function(elem){
    elem = document.activeElement
    if (elem.getAttribute("type") == "email"){
        document.documentElement.style.setProperty("--background-mail", "url(../svg/mail-focus.svg)")
    } else if(elem.getAttribute("type") == "password"){
        document.documentElement.style.setProperty("--background-pass", "url(../svg/lock-focus.svg)")
    }else{
        document.documentElement.style.setProperty("--background-mail", "url(../svg/mail.svg)")
        document.documentElement.style.setProperty("--background-pass", "url(../svg/lock.svg)")
    }
}, true)

document.addEventListener('click', function(){
    let elem = document.activeElement
    if (elem == document.body){
        document.documentElement.style.setProperty("--background-mail", "url(../svg/mail.svg)")
        document.documentElement.style.setProperty("--background-pass", "url(../svg/lock.svg)")
    }
})
