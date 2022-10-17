document.querySelector("#text").addEventListener("focusout", myText);


function myText(){
    let message, text;
    let errElement = document.getElementById("text");
    message = document.getElementById("err");
    text = document.getElementById("text").value;

    try {
        if(text == ""){
            errElement.classList.remove("valid");
            errElement.classList.add("err");
            throw "Ubi narsa yozin"
        }
        if(text.length > 0){
            errElement.classList.remove("err");
            errElement.classList.add("valid");
            message.innerHTML = "";
        }
    }catch(e){
        
    };
};


document.querySelector("#password").addEventListener("focusout", myTextt);


function myTextt(){
    let message, text;
    let errElement = document.getElementById("password");
    message = document.getElementById("err2");
    text = document.getElementById("password").value;

    try {
        if(text == ""){
            errElement.classList.remove("valid");
            errElement.classList.add("err2");
            throw "Ubi narsa yozin"
        }
        if(text.length > 0){
            errElement.classList.remove("err2");
            errElement.classList.add("valid");
            message.innerHTML = "";
        }
    }catch(e){
        
    };
};


document.querySelector("#name").addEventListener("focusout", myNAME);


function myNAME(){
    let message, text;
    let errElement = document.getElementById("name");
    message = document.getElementById("err3");
    text = document.getElementById("name").value;

    try {
        if(text == ""){
            errElement.classList.remove("valid");
            errElement.classList.add("err3");
            throw "Ubi narsa yozin"
        }
        if(text.length > 0){
            errElement.classList.remove("err3");
            errElement.classList.add("valid");
            message.innerHTML = "";
        }
    }catch(e){
        
    };
};


document.querySelector("#tel").addEventListener("focusout", myTEL);


function myTEL(){
    let message, text;
    let errElement = document.getElementById("tel");
    message = document.getElementById("err4");
    text = document.getElementById("tel").value;

    try {
        if(text == ""){
            errElement.classList.remove("valid");
            errElement.classList.add("err4");
            throw "Ubi narsa yozin"
        }
        if(text.length > 0){
            errElement.classList.remove("err4");
            errElement.classList.add("valid");
            message.innerHTML = "";
        }
    }catch(e){
        
    };
};