<?php

// Dades necessàries pe connectar-me al servidor de BD
$sName="localhost"; // servidor del Gestor de Base de Dades (MySQL)
$uName="root";      // nom d´usuari per a poder entrar al MySQL
$pass="";           // contraseña de l´usuari gesto de la BD
$db_name="escacs_db";    // nom de la BD a la qual em vull connectar
try{
   $conn= new PDO("mysql:host=$sName;dbname=$db_name; charset=utf8mb4", $uName, $pass);
   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
   echo "NO s´ha pogut establir la connexió: ". $e->getMessage();
   exit();
}




?>