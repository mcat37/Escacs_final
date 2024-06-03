<?php
session_start();
if(isset($_SESSION['id'])&& isset($_SESSION['nom_public'])):?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="../css/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Chess Game</title>
    </head>
    <body>

    <?php include("includes/header.php"); ?>
    <div onclick="off()" id="overlay" class="overlay">
   
        <div class="config-info"> configuracion:</div>
        <div> otro</div>
        <div> otro</div>

    </div>
    <main>
        <div id="container">
        <h1 class="display-4 text-center  text-primary">Benvingut <?php echo $_SESSION['nom_public']?></h1>
            <div id="turn-indicator">Turno: Blancas</div>
            <div id="countdowns" class="countdowns">
                <div id="countdown1" class="countdownW">Blancas : 03:00 </div>
                <div id="countdown2" class="countdownB">Negras : 03:00 </div>
            </div>
            <div class="info-top">
                <div class="info">
                    <div class="info-item">
                        <i class="fas fa-chess-pawn"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-knight"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-bishop"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-rook"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-queen"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-king"></i>
                        <span>1</span>
                    </div>
                </div>
            </div>
            <div id="mainscreen">
                <div id="chessboard"></div>
                <div id="historial">
                    <div id="left-historial"></div>
                    <div id="right-historial"></div>
                </div>
            </div>
            <div class="info-bottom">
                <div class="info">
                    <div class="info-item">
                        <i class="fas fa-chess-pawn"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-knight"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-bishop"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-rook"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-queen"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-king"></i>
                        <span>1</span>
                    </div>
                </div>
            </div>
            
        <div id="buttons">
            <button id="new-game">New Game</button>
            <button id="undo">Undo</button>
            <button id="redo">Redo</button>
        </div> 
</main>
<?php include("includes/footer.php"); ?>
<script src="js/blitz.js"></script>
<script src="js/script.js"></script>
<script src="js/options.js"></script>

</body>
</html>
<?php else: ?>

<?php
//Algu està intentant accedir directament a la pag web segura
header("Location:php/login.php");
?>


<?php endif; ?>
