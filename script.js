let imagem = document.querySelector(".troca-imagem");

const trocaImagem = () => {
    imagem.style.opacity == 0 ? imagem.style.opacity = 1 : imagem.style.opacity = 0;
}

setInterval(trocaImagem, 3000);