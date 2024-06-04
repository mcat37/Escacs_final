<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="../css/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- <link rel="stylesheet" href="css/style.css"> -->
        <title>Chess Game</title>
    </head>
    <body>

    <?php include("includes/header.php"); ?>
    <main>
        <canvas id="canv" class="canvas"></canvas>
        <div id="container">
            <div id="turn-indicator">Turno: Blancas</div>
            <div class="info-top">
                <div class="info">
                    <div class="info-item">
                        <i class="fas fa-chess-knight"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-bishop"></i>
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
                    <div class="info-item">
                        <i class="fas fa-chess-pawn"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-rook"></i>
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
                        <i class="fas fa-chess-knight"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-bishop"></i>
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
                    <div class="info-item">
                        <i class="fas fa-chess-pawn"></i>
                        <span>1</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chess-rook"></i>
                        <span>1</span>
                    </div>
                </div>
            </div>
        <div id="buttons">
            <button id="new-game">New Game</button>
            <!-- <button id="undo">Undo</button>
            <button id="redo">Redo</button> -->
        </div> 

</main>
<script src="js/matrix.js"></script>
<script src="js/script.js"></script>
</body>
</html>
