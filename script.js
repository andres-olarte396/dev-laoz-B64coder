document.getElementById('encodeBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const encodedText = btoa(inputText);
        document.getElementById('outputText').value = encodedText;
    } else {
        alert("Por favor, introduce texto para codificar.");
    }
});

document.getElementById('decodeBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    try {
        const decodedText = atob(inputText);
        document.getElementById('outputText').value = decodedText;
    } catch (e) {
        alert("El texto introducido no es un Base64 válido.");
    }
});
