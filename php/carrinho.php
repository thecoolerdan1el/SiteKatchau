<?php

    $con = mysqli_connect("localhost:3306", "root", "Oportunity23#", "loja_katchau");

    $resultado = mysqli_query($con, 'SELECT * FROM carrinho AS c INNER JOIN produto AS p ON c.id_produto = p.id_produto');

    $dados = array();

    while($registro = mysqli_fetch_assoc($resultado)){
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;

?>