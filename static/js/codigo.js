//não sei o que é isso, mas é inutil

function mostrarHistorico() {
    const exit = document.getElementById("exit")
    exit.style.height = "35px"
    exit.style.width = "35px"
    const tabelaazul = document.getElementById("tabelaazul")
    const tabela = document.getElementById("tabela")
    tabelaazul.style.width = "130px"
    tabelaazul.style.marginLeft = "10px"
    tabela.style.width = "180px"
    const input = document.getElementById('input')
    const input2 = document.getElementById('input2')
    const input3 = document.getElementById('input3')
    input.style.width = "150px"
    input2.style.width = "150px"
    input3.style.width = "150px"
    const textoquadro = document.getElementById('texto-quadro')
    textoquadro.style.marginLeft = "10px"
    const adicionar = document.getElementById('adicionar')
    adicionar.style.marginLeft = "10px"
    const ctol = document.getElementById('c-to-l')
    ctol.style.left = "10px"
    const topo = document.getElementById('topo_azul')
    const baixo = document.getElementById('baixo_branco')
    topo.style.width = "800px"
    topo.style.height = "100px"
    baixo.style.width = "800px"
    baixo.style.height = "300px"
}
function fecharHistorico(){
    const exit = document.getElementById("exit")
    exit.style.height = "0px"
    exit.style.width = "0px"
    const tabelaazul = document.getElementById("tabelaazul")
    const tabela = document.getElementById("tabela")
    tabelaazul.style.width = "250px"
    tabelaazul.style.marginLeft = "0px"
    tabela.style.width = "600px"
    const input = document.getElementById('input')
    const input2 = document.getElementById('input2')
    const input3 = document.getElementById('input3')
    input.style.width = "450px"
    input2.style.width = "450px"
    input3.style.width = "450px"
    const textoquadro = document.getElementById('texto-quadro')
    textoquadro.style.marginLeft = "0px"
    const adicionar = document.getElementById('adicionar')
    adicionar.style.marginLeft = "450px"
    const ctol = document.getElementById('c-to-l')
    ctol.style.left = "215px"
    const topo = document.getElementById('topo_azul')
    const baixo = document.getElementById('baixo_branco')
    topo.style.width = "0px"
    topo.style.height = "0px"
    baixo.style.width = "0px"
    baixo.style.height = "0px"
}

//mudar imagens e cores da tela de inicio

const pessoas = [
    { class: 'pessoa1', image: '../static/img/pessoa1.png', bgColor: 'pessoa1_cor', fundo: '../static/img/fundo1.png' },
    { class: 'pessoa2', image: '../static/img/pessoa2.png', bgColor: 'pessoa2_cor', fundo: '../static/img/fundo2.png' },
    { class: 'pessoa3', image: '../static/img/pessoa3.png', bgColor: 'pessoa3_cor', fundo: '../static/img/fundo3.png' },
    { class: 'pessoa4', image: '../static/img/pessoa4.png', bgColor: 'pessoa4_cor', fundo: '../static/img/fundo4.png' },
];


function escolherPessoaAleatoria() {
    return pessoas[Math.floor(Math.random() * pessoas.length)];
}


function aplicarEstiloAleatorio() {
    
    const pessoaEscolhida = escolherPessoaAleatoria();

    
    const imgElement = document.querySelector('.pessoa4'); 
    const saldoElement = document.querySelector('.saldo_total');
    const fundoSection = document.querySelector('.fundo1');


    pessoas.forEach(pessoa => {
        imgElement.classList.remove(pessoa.class);
        saldoElement.classList.remove(pessoa.bgColor);
        fundoSection.classList.remove(pessoa.bgColor); 
    });


    imgElement.classList.add(pessoaEscolhida.class);
    imgElement.src = pessoaEscolhida.image;
    saldoElement.classList.add(pessoaEscolhida.bgColor);
    fundoSection.classList.add(pessoaEscolhida.bgColor); 

    fundoSection.style.backgroundImage = `url(${pessoaEscolhida.fundo})`;
    fundoSection.style.backgroundSize = 'cover';
}

window.onload = aplicarEstiloAleatorio;

//mudar pergunta da pagina de cadastro


const grupo1 = document.getElementById('grupo1');
const grupo2 = document.getElementById('grupo2');
const btnProximo1 = document.getElementById('btnProximo1');
const btnVoltar = document.getElementById('btnVoltar');

btnProximo1.addEventListener('click', () => {
    grupo1.style.display = 'none';
    grupo2.style.display = 'block';
});

btnVoltar.addEventListener('click', () => {
    grupo2.style.display = 'none';
    grupo1.style.display = 'block';
});

// aparecer as informações do usuario na home

document.getElementById("toggleUser").addEventListener("click", function () {
    const userInfo = document.querySelector(".escuro.mais");
    userInfo.classList.toggle("oculto");
});