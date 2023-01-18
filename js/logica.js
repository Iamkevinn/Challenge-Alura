const textousuario = document.querySelector("#Texto");
const texto1 = document.querySelector("#mensaje1");
const texto2 = document.querySelector("#mensaje2");
const textElem = document.getElementById("mensaje1");
const Logica = document.querySelector(".rectangulo");
const textArea = document.createElement("textarea");

Logica.appendChild(textArea);
textArea.style.height = "55vh";
textArea.style.width = "90%";
textArea.style.outline = "none";
textArea.style.resize = "none";
textArea.style.color = "#0a3871";
textArea.style.background = "transparent";
textArea.style.border = "1px solid rgba(0, 0, 0, transparent)";
//textArea.style.border = "none";
textArea.style.fontSize = "32px";
textArea.style.padding = "8px 8px 0";
textArea.style.letterSpacing = "2px";
textArea.style.margin = "0 25px";
textArea.style.display = "none";
textArea.id = "Mensajepc";
function Obtener(){
    document.querySelector(".muneco").style.display = "none";
    document.querySelector("#Copiar").style.display = "block";
    document.querySelector("#mensaje1").style.display = "none";
    document.querySelector("#mensaje2").style.display = "none";
    textArea.style.display = "flex";
}

function ComprobarEncript(){
    if(textousuario.value != ''){
        let encriptado = encriptar(textousuario.value);    
        textArea.value = encriptado;
        texto2.textContent = "";
    } else{
        alert("No has escrito nada aun!");
    }
    
}
function ComprobarDesencriptar(){
    if(textousuario.value != ''){
        let desencriptado = desencriptar(textousuario.value);
        textArea.value = desencriptado;
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
function Copiar(){
    textArea.select();
    document.execCommand("copy");
    alert("Copiado con exito!");
}