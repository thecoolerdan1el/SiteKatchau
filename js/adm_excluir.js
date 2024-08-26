async function excluir(){
    
    var product_id = document.getElementById('product').value;

    var dados =  new FormData();
    dados.append('product_id', product_id);

    product_id = document.getElementById('product').value = "";

    var promise = await fetch("../php/excluir.php", {
        method: 'POST',
        body: dados
    });

    var resposta = await promise.json();
    alert(resposta);
}


window.onload = async function (){ // Função anônima - Sem nome 

    var resultado = await fetch("../php/listarProdutos.php", {
        method:"GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){
        
        var conteudo = 
        `<div class="card" id="card">
            <div class="card-id">
            <h4>${dados[i].id_produto} - </h4>
                </div>
            <div class="card-titulo">
                <h4>${dados[i].nome_produto}</h4>
            </div>
        </div>`


        document.getElementById('produtos').innerHTML += conteudo;
    }

}