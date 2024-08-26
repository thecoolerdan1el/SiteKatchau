window.onload = async function (){ // Função anônima - Sem nome 

    var resultado = await fetch("../php/carrinho.php", {
        method:"GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){
        
        var conteudo = 
        `<div class="card" id="card">
            <div class="card-titulo">
                <h3>${dados[i].nome_produto}</h3>
            </div>
            <div class="card-img">
                <img src="" alt="">
            </div>
            <div class="card-preco">
                <p>TOTAL DA COMPRA: <strong>${dados[i].preco_produto}</strong></p>
                <p>Possível parcelar até 6x</p>
            </div>
        </div>`


        document.getElementById('produtos').innerHTML += conteudo;
    }

}

async function venda() {
    var form = document.getElementById('formulario');
    var dados = new FormData(form);

    var promise = await fetch("../php/finalizarCompra.php", {
        method: "POST",
        body: dados
    });



    var selectElement = document.getElementById('pagamentoSelect');
    var resposta = await promise.json();

    alert(resposta);
    var selectElement = document.querySelector('select[name="pagamento"]');

    if (selectElement && selectElement.value === 'pix') {
        mostrarImagem();
    }


}


function mostrarImagem() {
    var imagemPix = document.getElementById('imagemPix');
    console.log('Chamou mostrarImagem');
    imagemPix.style.display = 'block';
}






