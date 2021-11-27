<?php

require_once("connection.php");

// NAME
$nome = $_POST['name'];

$age = $_POST['age'];
$align = $_POST['align'];
$place = $_POST['country'];

$skill = $_POST['ability'];
$ocupation = $_POST['ocupation'];

$orga = $_POST['organization'];

$title = $_POST['titles'];
$desc = $_POST['desc'];

// -----------------------------------------

if(empty($_POST['name'])){
    echo "\n\n\nYou must include a name!";
} else {

    $sql = "insert into personagem(nome, alinhamento, pais, habilidade, ocupacao, titulo, descricao_perso, age, FKorg)
    values('$nome', '$align', '$place', '$skill', '$ocupation', '$title', '$desc', '$age', '$orga')";
    $result = mysqli_query($conn, $sql);

    $fetch = mysqli_query($conn, "select idperso from personagem where nome='$nome'");
    $take_perso = mysqli_fetch_assoc($fetch);

    $sql_org = "insert into org_perso(org_id_take, perso_id_take) values ('$orga', '{$take_perso['idperso']}')";
    $resultthree= mysqli_query($conn, $sql_org);


if (!$sql){
    echo("Ocorreu um erro durante operação de dados; " . mysqli_error());
} else {
    echo("Dados inseridos com sucesso!");
}
}
