const textArea = document.querySelector(".textarea_izd");
const mensaje = document.querySelector(".mensaje");


///copiar
function btnCopiar() {
    var textarea = document.querySelector(".mensaje");
    textarea.select();
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);
    window.getSelection().removeAllRanges();
}

/////boton encriptar 

function btnEncriptar() {
    const textoE = encriptar(textArea.value)
    mensaje.value = textoE
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

/////boton desencriptar 

function btnDesencriptar() {
    const textoE = desencriptar(textArea.value)
    mensaje.value = textoE
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

//////Funcion encriptar 
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

//////Funcion desencriptar 
function desencriptar(stringDesncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesncriptada.includes(matrizCodigo[i][1])) {
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesncriptada
}
































