// Funkcija za validaciju login forme

let inputUsername = document.querySelector(".input-box #username");
let inputPassword = document.querySelector(".input-box #password");
const errorMessage = document.querySelector('.errorMessage p');

inputUsername.addEventListener("focus", () => {
    inputUsername.style.border = "2px solid #fff";
})

inputUsername.addEventListener("blur", () => {
    inputUsername.style.border = "2px solid rgba(255,255,255,0.2)";
})

inputPassword.addEventListener("focus", () => {
    inputPassword.style.border = "2px solid #fff";
})

inputPassword.addEventListener("blur", () => {
    inputPassword.style.border = "2px solid rgba(255,255,255,0.2)";
})


function validateLoginInput() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const invalidChars = /[<>!#$%^&*()]/;

    if(username == "" || password == "") {
        errorMessage.innerText = "Попуните оба поља";

        if(inputUsername.value == "" && inputPassword.value == "") {
            inputUsername.style.border = "2px solid red";
            inputPassword.style.border = "2px solid red";
        }
        else if(inputUsername.value == "" && inputPassword.value != "") {
            inputUsername.style.border = "2px solid red";
            inputPassword.style.border = "2px solid rgba(255,255,255,0.2)";
        }
        else if(inputPassword.value == "" && inputUsername.value != "") {
            inputPassword.style.border = "2px solid red";
            inputUsername.style.border = "2px solid rgba(255,255,255,0.2)";
        }
        return false;
    }
    else if(/\s/.test(username) || /\s/.test(password)) {
        errorMessage.innerText = "Поља не смеју садржати размаке!";
        
        if(/\s/.test(username) == true && /\s/.test(password) == true) {
            inputUsername.style.border = "2px solid red";
            inputPassword.style.border = "2px solid red";
        }
        else if(/\s/.test(username) == true && /\s/.test(password) == false) {
            inputUsername.style.border = "2px solid red";
            inputPassword.style.border = "2px solid rgba(255,255,255,0.2)";
        }
        else if(/\s/.test(password) == true && /\s/.test(username) == false) {
            inputUsername.style.border = "2px solid rgba(255,255,255,0.2)";
            inputPassword.style.border = "2px solid red";
        }
        return false;
    }
    else if(username.length < 5 || password.length < 5) {
        errorMessage.innerText = "Поља морају имати више од 5 карактера!";
        inputUsername.style.border = "2px solid red";
        inputPassword.style.border = "2px solid red";
        return false;
    }
    else if(invalidChars.test(username) || invalidChars.test(password)) {
        errorMessage.innerText = "Поља не смеју садржати специјалне карактере (!?<>&^....)";
        inputUsername.style.border = "2px solid red";
        inputPassword.style.border = "2px solid red";
        return false;
    }

    
    return true;
  
    
}

loginBtn = document.querySelector(".loginBtn");



loginBtn.addEventListener("click", (e) => {
    if(!validateLoginInput())
        e.preventDefault();


})
