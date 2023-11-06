DROP SCHEMA IF EXISTS loja_katchau;
DROP DATABASE IF EXISTS loja_katchau;
DROP TABLE IF EXISTS carrinho;
DROP TABLE IF EXISTS produto;

CREATE DATABASE IF NOT EXISTS loja_katchau;
USE loja_katchau;
CREATE TABLE produto(
	id_produto INT AUTO_INCREMENT,
    nome_produto VARCHAR(100),
    descricao_produto VARCHAR(100),
    preco_produto FLOAT,
	PRIMARY KEY (id_produto)
);

CREATE TABLE carrinho(
		id_carrinho INT AUTO_INCREMENT, 
        id_produto INT,
        PRIMARY KEY(id_carrinho)
);


INSERT INTO produto(nome_produto, descricao_produto, preco_produto)
VALUES('TECLADO RAZER HUNSTMAN MINI', 'Teclado 60% para conforto, produtividade e principalmente sua gameplay!', 1050.55),
('RAZER HEADSET GAMER NARI 7.1', 'Headset com mais de 8 horas de autonomia', 549.99),
('MOUSE RAZER WIRELESS VIPER', 'O mouse com até 16.000 de DPI!!', 249.99),
('MOUSE LOGITECH G PRO', 'Um dos mouse mais leves do mercado! 160g de pura habilidade!', '649.99'),
('FONE HYPERX 7.1 CLOUD II', 'Com 8 horas de autonomia, o fone Cloud II veio para revolucionar os fones 7.1 do mercado', '559.99');