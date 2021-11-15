<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ea_bd";


$conn= mysql_connect($servername,$username,$password,$dbname);
mysqli_set_charset($conn, "utf8mb4");

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
else {
echo "Connected Successfully.";
}



?>