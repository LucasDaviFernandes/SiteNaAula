const palavras = ["Computadores", "Smartphones", "Softwares", "Periféricos"];
let indicePalavra = 0;
let indiceLetra = 0;
let apagando = false;

function animarTexto() {
    let elemento = document.getElementById("texto");
    let palavraAtual = palavras[indicePalavra];

    if (!apagando) {
    
        elemento.textContent = palavraAtual.substring(0, indiceLetra + 1);
        indiceLetra++;
        if (indiceLetra === palavraAtual.length) {
            apagando = true;
            setTimeout(animarTexto, 1000); 
            return;
        }
    } else {
      
        elemento.textContent = palavraAtual.substring(0, indiceLetra - 1);
        indiceLetra--;
        if (indiceLetra === 0) {
            apagando = false;
            indicePalavra = (indicePalavra + 1) % palavras.length; 
        }
    }

    setTimeout(animarTexto, 150); 
}

animarTexto();