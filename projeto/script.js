const seletorCorFundo = document.getElementById("seletorCor");
const btnAplicarCor = document.getElementById("btnAplicarCor");

btnAplicarCor.addEventListener("click", (e) => {
    const cor=seletorCorFundo.value;
    document.documentElement.style.setProperty("--cor-fundo", cor);

});

const chips = document.querySelectorAll(".chip");
const imagemDestaque = document.getElementById("galeriaHero");

const imagemInicial = chips[0].datest.imagem;
galeria.style.backgroundImage = `url()`;