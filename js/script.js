window.onload = async function (){ // Função anônima - Sem nome 

    var resultado = await fetch("php/produtos.php", {
        method:"GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){
        
        var conteudo = 
        `<div class="card" id="card">
            <div class="card-titulo">
                <h2 id="product_name">${dados[i].nome_produto}
                </h2>
            </div>
            <div class= img-div >
            <img class="img-card" id="image" src="./upload/${dados[i].id_produto}.png" alt="">
            </div>
            <div class="card-descricao">
                <p id="description"> ${dados[i].descricao_produto} </br> ID:${dados[i].id_produto}</p>
            </div>
            <div class="card-preco">
                <p id="cifrao">R$ </p>
                <p id="price">${dados[i].preco_produto} <zp> 
                EM 6x SEM JUROS<p>
                </p>

            </div>

            <div class="alinha">
                <div class="card-acao"
                    onclick="comprar(${dados[i].id_produto})">COMPRAR
                </div>
            </div>
        </div>`


        document.getElementById('produtos').innerHTML += conteudo;
    }

}

function comprar(id){
    var dados = new FormData();
    dados.append("id_produto", id);

    fetch("php/comprar.php",{
        method: "POST",
        body: dados
    });
    
    alert("Produto Adicionado ao Carrinho! ")
}