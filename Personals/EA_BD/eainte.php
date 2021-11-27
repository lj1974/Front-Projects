<?php

require_once("connection.php");

// NAME
$nome = $_POST['name'];

$age = $_POST['age'];
$align = $_POST['align'];
$place = $_POST['country'];

$skill = $_POST['ability'];
$ocupation = $_POST['ocupation'];

// $orga = $_POST['organization'];

$title = $_POST['titles'];
$desc = $_POST['desc'];

// -----------------------------------------

if(empty($_POST['name'])){
    echo "\n\n\nYou must include a name!";
} else {

    $sql = "insert into personagem(nome, alinhamento, pais, habilidade, ocupacao, titulo, descricao_perso, age)
    values('$nome', '$align', '$place', '$skill', '$ocupation', '$title', '$desc', '$age')";
    $result = mysqli_query($conn, $sql);


if (!$sql){
    echo("Ocorreu um erro durante operação de dados; " . mysqli_error());
} else {
    echo("Dados inseridos com sucesso!");
}
}



// $sql2 =  "INSERT INTO `org_perso` (`org_id_take`, `org_perso_take`) VALUES ('$id_org', '$id_perso')";

?>
