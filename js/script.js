
const botoes = document.querySelectorAll(".selecionar");

if (botoes.length > 0) {

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const produto = {
                nome: botao.dataset.nome,
                descricao: botao.dataset.descricao,
                preco: botao.dataset.preco,
                imagem: botao.dataset.img
            };

            localStorage.setItem("produtoSelecionado", JSON.stringify(produto));

            window.location.href = "selecionado.html";

        });

    });

}
const nome = document.getElementById("nomeProduto");
const descricao = document.getElementById("descricaoProduto");
const preco = document.getElementById("precoProduto");
const imagem = document.getElementById("imagemProduto");

if (nome) {

    const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));

    if (produto) {

        nome.textContent = produto.nome;
        descricao.textContent = produto.descricao;
        preco.textContent = produto.preco;
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

    } else {

        nome.textContent = "Nenhum produto foi selecionado.";
        descricao.textContent = "Volte para a página inicial e escolha um produto.";
        preco.textContent = "";
        imagem.style.display = "none";

    }

}

const nomePagamento = document.getElementById("nomePagamento");

if (nomePagamento) {

    const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));

    if (produto) {

        document.getElementById("nomePagamento").textContent = produto.nome;
        document.getElementById("descricaoPagamento").textContent = produto.descricao;
        document.getElementById("precoPagamento").textContent = produto.preco;
        document.getElementById("imgPagamento").src = produto.imagem;

    }

}

// Simulação de pagamento

const formulario = document.getElementById("formPagamento");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Pagamento realizado com sucesso! Obrigado pela preferência.");

        localStorage.removeItem("produtoSelecionado");

        window.location.href = "index.html";

    });

}