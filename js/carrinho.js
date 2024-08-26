
window.onload = async function (){ // Função anônima - Sem nome 

    var resultado = await fetch("../php/carrinho.php", {
        method:"GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){
        
        var conteudo = 
        `<div class="card" id="card">
            <div class="card-titulo">
                <h1>${dados[i].nome_produto}</h1>
            </div>
            <div class="card-img">
                <img src="" alt="">
            </div>
            <div class="card-descricao">
                <p>Valor possível de parcelar até 6x com frete <strong>grátis</strong></p> 
            </div>
            <div class="card-preco">
                <p>TOTAL DA COMPRA: <strong>${dados[i].preco_produto}</strong></p>
            </div>
        </div>`


        document.getElementById('produtos').innerHTML += conteudo;
    }

}