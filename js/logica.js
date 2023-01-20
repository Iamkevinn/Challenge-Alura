const textousuario = document.querySelector("#Texto");
const texto1 = document.querySelector("#mensaje1");
const texto2 = document.querySelector("#mensaje2");
const textElem = document.getElementById("mensaje1");
const Logica = document.querySelector(".rectangulo");
const textArea = document.createElement("textarea");

Logica.appendChild(textArea);
textArea.style.height = "46vh";
textArea.style.width = "87%";
textArea.style.outline = "none";
textArea.style.resize = "none";
textArea.style.color = "#0a3871";
textArea.style.background = "transparent";
textArea.style.border = "1px solid rgba(0, 0, 0, 0.1)";
textArea.style.border = "none";
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
    textArea.style.border = "1px solid rgba(0, 0, 0, 0.1)";
    textArea.style.border = "none";
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
let comprobarmodo = false;
let colorfuente = document.querySelector('#mensaje1');
function Mode(){
    if(comprobarmodo == false){
        document.querySelector('.Page').classList.add('DarkMode');
        document.querySelector('.rectangulo').classList.add('DarkMode-rectangulo');

        colorfuente = document.querySelector('#mensaje1');
        colorfuente.style.color ="white";  
        colorfuente = document.querySelector('#mensaje2');
        colorfuente.style.color ="#a6b7cb";

        document.querySelector('.InputTexto').classList.add('DarkMode-Objects');

        colorfuente = document.querySelector('#Mensajepc');
        colorfuente.style.color ="#a6b7cb";

        document.querySelector('.Desencriptar').classList.add('DarkMode-Botones');
        document.querySelector('.Encriptar').classList.add('DarkMode-Botones2');

        colorfuente = document.querySelector('.advertenciadiv');
        colorfuente.style.color = "#b0ccf1";

        colorfuente = document.querySelector('.IconoSun');
        colorfuente.style.display = "none";
        colorfuente = document.querySelector('.IconoMoon');
        colorfuente.style.display = "inline-block";

        colorfuente = document.querySelector('.BotonCambio');
        
        colorfuente = document.querySelector('#Copiar');
        colorfuente.style.color = "#b0ccf1";
        colorfuente.style.border = "1px solid #a6b7cb";
        
        comprobarmodo = true;
    } else if(comprobarmodo == true){
        document.querySelector('.Page').classList.remove('DarkMode');
        document.querySelector('.rectangulo').classList.remove('DarkMode-rectangulo');

        document.querySelector('.InputTexto').classList.remove('DarkMode-Objects');

        colorfuente = document.querySelector('.advertenciadiv');
        colorfuente.style.color = "#495057";

        document.querySelector('.Desencriptar').classList.remove('DarkMode-Botones');
        document.querySelector('.Encriptar').classList.remove('DarkMode-Botones2');

        colorfuente = document.querySelector('#Mensajepc');
        colorfuente.style.color ="#0a3871";

        colorfuente = document.querySelector('#Copiar');
        colorfuente.style.color = "#0f4281";
        colorfuente.style.border = "1px solid #0A3871";

        colorfuente = document.querySelector('.IconoMoon');
        colorfuente.style.display = "none";
        colorfuente = document.querySelector('.IconoSun');
        colorfuente.style.display = "inline-block";

        colorfuente = document.querySelector('#mensaje1');
        colorfuente.style.color ="#343A40";  
        colorfuente = document.querySelector('#mensaje2');
        colorfuente.style.color ="#495057";

        comprobarmodo = false;
    }
    
}
