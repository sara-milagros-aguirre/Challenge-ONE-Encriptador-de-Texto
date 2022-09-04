const inputTexto = document.querySelector(".input-texto");
const texto = document.querySelector(".texto");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
const solicitudMsj = document.querySelector(".solicitudMensaje");
const letras = /^[a-z0-9 .,;:()¡!¿?""]*$/;

//Elementos//
solicitudMsj.style.display = "inline";
texto.style.display = "none";
btnCopiar.style.display = "none";

function botonEncriptar() {
    if (inputTexto.value == "") {
        //No ha ingresado el texto.//
    } else if (!letras.test(inputTexto.value) || inputTexto.value.length === 0) {
        alert("Solo letras minúsculas y sin acentos.");
    }else {
        const textoEncriptado = encriptar(inputTexto.value);
        texto.value = textoEncriptado;
        inputTexto.value = "";
        encriptar();
    }
    inputTexto.focus();
}

function ocultarElementos() {
    solicitudMsj.style.display = "none";
    texto.style.display = "inline";
    btnCopiar.style.display = "inline";
}

function encriptar(stringEncriptar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    ocultarElementos();
    return stringEncriptar;
}

function botonDesencriptar() {
    if (inputTexto.value == "") {
        //No ha ingresado el texto.//
    }else {
        const textoDesencriptado = desencriptar(inputTexto.value);
        texto.value = textoDesencriptado;
        inputTexto.value = "";
        desencriptar();
    }
    inputTexto.focus();
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }
    ocultarElementos();
    return stringDesencriptar;
}

function copiar() {
        texto.select();
        navigator.clipboard.writeText(texto.value);
        texto.value = "";
        alert("Texto copiado");
    inputTexto.focus();
}

btnEncriptar.onclick = botonEncriptar;
btnDesencriptar.onclick = botonDesencriptar;
btnCopiar.onclick = copiar;
