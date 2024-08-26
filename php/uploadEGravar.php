<?php

    $image = $_FILES["image"];
    $nameProduct = $_POST['nameProduct'];
    $priceProduct = $_POST['priceProduct'];
    $descriptionProduct = $_POST['descriptionProduct'];

    $con = mysqli_connect("localhost:3306", "root", "Oportunity23#", "loja_katchau");

    $query = "INSERT INTO produto (nome_produto, descricao_produto, preco_produto) VALUES ('$nameProduct', '$descriptionProduct', '$priceProduct')";

    $mensagem = "";
    
    

    if (empty($nameProduct) || empty($priceProduct) || empty($descriptionProduct) || pathinfo($image["name"], PATHINFO_EXTENSION) !== "png") {
        $mensagem = "Erro, alguns dos campos estao vazios ou a imagem esta no formato errado, somente PNG."; 
    } else {
        mysqli_query($con, $query);

        $id_produto = mysqli_insert_id($con);

        $novo_arquivo = "../upload/" . $id_produto.".png";
        move_uploaded_file($image["tmp_name"], $novo_arquivo);
        $mensagem = "Sucesso! Produto cadastrado!";
    } 
    
    $json = json_encode($mensagem);

    echo $json;
?>