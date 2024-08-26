<?php
$select = $_POST["pagamento"];

$mensagem = "";


switch ($select) {
    case "pix":
        $mensagem = "Forma de pagamento: PIX - COMPRA EFETUADA COM SUCESSO";
        break;
    case "credito":
        $mensagem = "forma de pagamento: Crédito - COMPRA EFETUADA COM SUCESSO";
        break;
    case "debito":
        $mensagem = "forma de pagamento: Débito - COMPRA EFETUADA COM SUCESSO";
        break;
}
$json = json_encode($mensagem);
echo $json;



$con = mysqli_connect("localhost:3306", "root", "Oportunity23#", "loja_katchau");

$resultado = mysqli_query($con, 'SELECT * FROM carrinho AS c INNER JOIN produto AS p ON c.id_produto = p.id_produto');

$dados = array();

while($registro = mysqli_fetch_assoc($resultado)){
    array_push($dados, $registro);
}
?>

