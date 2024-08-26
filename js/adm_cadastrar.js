async function enviar() {

    var nameProduct = document.getElementById('product_name').value;
    var priceProduct = document.getElementById('price').value;
    var descriptionProduct = document.getElementById('description').value;
    var image = document.getElementById('image').files[0];

    var dados = new FormData();
    dados.append('nameProduct', nameProduct);
    dados.append('priceProduct', priceProduct);
    dados.append('descriptionProduct', descriptionProduct);
    dados.append('image', image);

    nameProduct = document.getElementById('product_name').value = "";
    priceProduct = document.getElementById('price').value = "";
    descriptionProduct = document.getElementById('description').value = "";
    image = document.getElementById('image').files[0] = "";

    var promise = await fetch("../php/uploadEGravar.php", {
        method: 'POST',
        body: dados
    });

    var resposta = await promise.json();
    alert(resposta);


}
