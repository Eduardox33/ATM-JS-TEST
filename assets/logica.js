// VARS

let test = document.getElementById("test");
let usuario = document.getElementById("Usuario")
const boton1 = document.getElementById("b1");
const boton2 = document.getElementById("b2");
const boton3 = document.getElementById("b3");
const boton4 = document.getElementById("b4");
const boton5 = document.getElementById("b5");
const boton6 = document.getElementById("b6");
const boton7 = document.getElementById("b7");
const boton8 = document.getElementById("b8");
const boton9 = document.getElementById("b9");
const boton0 = document.getElementById("b0");
const botonend = document.getElementById("back");
const botonenter = document.getElementById("enter");

// BOTONES

boton1.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "1"
    } else{
        test.textContent = test.textContent + "1"
    };
});
boton2.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "2"
    } else{
        test.textContent = test.textContent + "2"
    };
});
boton3.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "3"
    } else{
        test.textContent = test.textContent + "3"
    };
});
boton4.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "4"
    } else{
        test.textContent = test.textContent + "4"
    };
});
boton5.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "5"
    } else{
        test.textContent = test.textContent + "5"
    };
});
boton6.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "6"
    } else{
        test.textContent = test.textContent + "6"
    };
});
boton7.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "7"
    } else{
        test.textContent = test.textContent + "7"
    };
});
boton8.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "8"
    } else{
        test.textContent = test.textContent + "8"
    };
});
boton9.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "9"
    } else{
        test.textContent = test.textContent + "9"
    };
});
boton0.addEventListener("click",function(){
    if (test.textContent === "Incorrecto"){
        test.textContent = "0"
    } else{
        test.textContent = test.textContent + "0"
    };
});
botonend.addEventListener("click",function(){
    test.textContent = ""
});
botonenter.addEventListener("click",function(){
    if (test.textContent.length != 3){
        test.textContent = "Incorrecto"
    } else {
        usuario.textContent = "Usuario: "+ test.textContent + 
        " Id: " + (parseInt(test.innerHTML)+parseInt(test.innerHTML)*7)
    };
});