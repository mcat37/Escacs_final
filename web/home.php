<?php
session_start();
if(isset($_SESSION['id'])&& isset($_SESSION['nom_public'])):?>

<!--Zona html--->
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
  <body>
    <div class="container_nav">
      <nav>
        <a href="play.php">Jugar</a>
        <!-- <a href="player_list.php">Llista de jugadors</a>
        <a href="history.php">Historial de partides</a> -->
       <a href="logout.php">Tanca sesió</a>

      </nav>
    </div>
    <div >
        <div >
            <h3 class="h3">
              Molt benvingut <?php echo $_SESSION['nom_public'] ?>
            </h3>
          
        </div>
    </div>
<h3>Historial</h3>
    <div class="profile-card">
    <img src="" alt="foto perfil">
    <h4><?php echo $_SESSION['nom_public']; ?></h4>

    <div>

    </div>
    </div>
   
  </body>
</html>

<?php else: ?>

    <?php
//Algu està intentant accedir directament a la pag web segura
header("Location:php/login.php");
?>


<?php endif; ?>