<?php 
session_start();
session_unset();
session_destroy();
$em="Gracies per Jugar!";
header("Location:index.php?success=$em");
exit;

?>