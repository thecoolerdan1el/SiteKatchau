<?php

    $productId = $_POST['product_id'];

    $con = mysqli_connect("localhost:3306", "root", "Oportunity23#", "loja_katchau");

    $query = "DELETE FROM produto WHERE id_produto = $productId";

    $mensagem = "Produto de id " . $productId." deletado com Sucesso!";

    mysqli_query($con, $query);

    $json = json_encode($mensagem);

    echo $json;






?>