const titulo = document.getElementById('texto').innerText;
console.log(titulo);
alert(" o texto do paragráfo é: " + titulo);

const campoNome = document.getElementById("campo-nome");
campoNome.addEventListener("input", (e) => {
    console.log(e.target.value);
});

const caixa = document.getElementById("caixa");
//caixa.innerHTML = "<h2>Conteúdo alterado via JavaScript</h2>";

const botao = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", (e) => {
    const valor = campoNome.value;
    mensagem.textContent = "Olá, " + valor;
})
