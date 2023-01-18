const textousuario = document.querySelector("#Texto");
const texto1 = document.querySelector("#mensaje1");
const texto2 = document.querySelector("#mensaje2");
const textElem = document.getElementById("mensaje1");
const textArea = document.createElement("textarea");
textArea.value = textElem.innerHTML;
textArea.style.width = "90%";
textArea.style.height = "65%";
textArea.style.outline = "none";
textArea.style.resize = "none";
textArea.style.color = "#0a3871";
textArea.style.background = "transparent";
//textArea.style.border = "none";
textArea.style.fontSize = "32px";
textArea.style.padding = "8px 8px 0";
textArea.style.letterSpacing = "2px";
textArea.style.letterSpacing = "2px";
let comprobar = false;
function Obtener(){
    document.querySelector(".muneco").style.display = "none";
    document.querySelector("#Copiar").style.display = "block";
}

function ComprobarEncript(){
    if(textousuario.value != ''){
        let encriptado = encriptar(textousuario.value);
        if(comprobar == false){
            textElem.parentNode.replaceChild(textArea, textElem);    
            textArea.value = encriptado;
            comprobar = true;
        } else if (comprobar == true){
            textArea.value = encriptado;
            comprobar = false;  
        }
        texto2.textContent = "";
    } else{
        alert("No has escrito nada aun!");
    }
    
}
function ComprobarDesencriptar(){
    let desencriptado = desencriptar(textousuario.value);
    if(textousuario.value != ''){
        if(comprobar == false){
            textElem.parentNode.replaceChild(textArea, textElem);
            textArea.value = desencriptado;
            comprobar = true;
        } else if(comprobar == true){
            textArea.value = desencriptado;
            comprobar = false;
        }
        texto2.textContent = "";
    } else{
        alert("No has escrito nada aun!");
    }
}
function encriptar(mensaje){

    Obtener();
    mensaje = mensaje.toLowerCase();
    if(mensaje.includes('e')){
        mensaje = mensaje.replaceAll('e','enter');
    }
    if(mensaje.includes('i')){
        mensaje = mensaje.replaceAll('i','imes');
    }
    if(mensaje.includes('a')){
        mensaje = mensaje.replaceAll('a','ai');
    }
    if(mensaje.includes('o')){
        mensaje = mensaje.replaceAll('o','ober');
    }
    if(mensaje.includes('u')){
        mensaje = mensaje.replaceAll('u','ufat');
    }
    return mensaje;
}
function desencriptar(mensaje){
    Obtener();
    mensaje = mensaje.toLowerCase();
    if(mensaje.includes('enter')){
        mensaje = mensaje.replaceAll('enter','e');
    }
    if(mensaje.includes('imes')){
        mensaje = mensaje.replaceAll('imes','i');
    }
    if(mensaje.includes('ai')){
        mensaje = mensaje.replaceAll('ai','a');
    }
    if(mensaje.includes('ober')){
        mensaje = mensaje.replaceAll('ober','o');
    }
    if(mensaje.includes('ufat')){
        mensaje = mensaje.replaceAll('ufat','u');
    }
    return mensaje;
}
