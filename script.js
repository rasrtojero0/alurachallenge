//VARIABLES

//Boton encriptar
let boton = document.getElementById("encripta");
boton.addEventListener("click",validado);

//Boton desencriptar
let botondesencriptar =  document.getElementById("desencripta");
botondesencriptar.addEventListener("click",textodes);

//Boton copiar 
let botoncopiar = document.getElementById("copiar");
botoncopiar.addEventListener("click",copialo);

//Textarea ingrese texto
let mensaje = document.getElementById("textarea");

//Textarea muñeco
let munnecotxt = document.getElementById("munneco_txt");



// FUNCIONES

// Función boton encriptar 

//Función validar minuculas y acentos 

function validado(){
    const permitido = /[a-z ]/;
    if(permitido.test(mensaje.value)){
        validar()
  
    }else{
        alert("NO PERMITIDO")
        document.getElementById("invalido").style.color ="red";
        document.getElementById("invalido").style.fontSize = "25px"; 
    }
}

function validar(){
 
    const nopermitido = /[A-Z\ á\ é\ í\ ó\ ú\ ]+$/;
    if(nopermitido.test(mensaje.value)){
        alert("NO PERMITIDO")
        document.getElementById("invalido").style.color ="red";
        document.getElementById("invalido").style.fontSize = "25px";
    }else{
        texto()
    }
}
  

function texto(){

    texto = mensaje.value;
    codificar()
    
    munnecotxt.value = codificado
    document.getElementById("invalido").style.color = "#495057"
    document.getElementById("invalido").style.fontSize = "12px"
    document.getElementById("imagen").style.opacity = "0";
    document.getElementById("copiar").style.opacity = "1";
    mensaje.value = ""
 
}

function codificar(){
        
    codificado = texto.replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat")
    .replace(/e/gi,"enter")
    
}

//Función boton desencriptar

function textodes(){
    textodes = mensaje.value;
        decodificar()
    
    munnecotxt.value = decodificado.toLowerCase();
    document.getElementById("imagen").style.opacity = "0";
    document.getElementById("copiar").style.opacity = "1";

}

function decodificar(){
   
    decodificado = textodes.replace(/ai/gi,"a")
                           
                           .replace(/enter/gi,"e")
                           .replace(/ober/gi,"o")
                           .replace(/ufat/gi,"u")
                          .replace(/imes/gi,"i")

}

//Función boton copiar

function copialo(){
    munnecotxt.focus()
    document.execCommand("selectAll");
    document.execCommand("copy");
}

//   U+00E1\ U+00E9\ U+00ED\ U+00F3\ U+00FA

