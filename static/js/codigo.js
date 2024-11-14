function mostrarHistorico() {
    const historico = document.getElementById("historico");
    historico.style.display = historico.style.display === "none" || historico.style.display === "" ? "block" : "none";
}

// Lista de classes, imagens e fundos disponíveis
const pessoas = [
    { class: 'pessoa1', image: '../static/img/pessoa1.png', bgColor: 'pessoa1_cor', fundo: '../static/img/fundo1.png' },
    { class: 'pessoa2', image: '../static/img/pessoa2.png', bgColor: 'pessoa2_cor', fundo: '../static/img/fundo2.png' },
    { class: 'pessoa3', image: '../static/img/pessoa3.png', bgColor: 'pessoa3_cor', fundo: '../static/img/fundo3.png' },
    { class: 'pessoa4', image: '../static/img/pessoa4.png', bgColor: 'pessoa4_cor', fundo: '../static/img/fundo4.png' },
];

// Função para escolher uma pessoa aleatoriamente
function escolherPessoaAleatoria() {
    return pessoas[Math.floor(Math.random() * pessoas.length)];
}

// Aplicar a classe, imagem e fundo escolhidos aleatoriamente
function aplicarEstiloAleatorio() {
    // Seleciona a pessoa aleatória
    const pessoaEscolhida = escolherPessoaAleatoria();

    // Seleciona os elementos HTML
    const imgElement = document.querySelector('.pessoa4'); // imagem inicial é 'pessoa4'
    const saldoElement = document.querySelector('.saldo_total');
    const fundoSection = document.querySelector('.fundo1'); // A seção que vai ter o fundo alterado

    // Remove as classes existentes das imagens, fundos e elementos
    pessoas.forEach(pessoa => {
        imgElement.classList.remove(pessoa.class);
        saldoElement.classList.remove(pessoa.bgColor);
        fundoSection.classList.remove(pessoa.bgColor); // Remover fundo anterior
    });

    // Adiciona as classes e atualiza o src da imagem
    imgElement.classList.add(pessoaEscolhida.class);
    imgElement.src = pessoaEscolhida.image;
    saldoElement.classList.add(pessoaEscolhida.bgColor);
    fundoSection.classList.add(pessoaEscolhida.bgColor); // Adiciona o fundo correspondente

    // Alterar o fundo da seção
    fundoSection.style.backgroundImage = `url(${pessoaEscolhida.fundo})`;
    fundoSection.style.backgroundSize = 'cover'; // Garante que o fundo cubra toda a seção
}

// Chama a função ao carregar a página
window.onload = aplicarEstiloAleatorio;



