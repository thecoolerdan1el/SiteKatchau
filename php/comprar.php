<?php
  $id_produto = $_POST["id_produto"];

  $con = mysqli_connect("localhost:3306", "root", "Oportunity23#", "loja_katchau");

  $query = "INSERT INTO carrinho (id_produto) VALUES ($id_produto)";

    mysqli_query($con, $query);






?>