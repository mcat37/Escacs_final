


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicia sessió</title>
    <link rel="stylesheet" href="../css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
<body>
    <div class="contenedor">
      
        <div class="formulario">
            <form action="./php/login.php" method="post">
                <h4 class="text4">Iniciar sessió per començar a jugar</h4>
                <?php if(isset($_GET['error'])): ?>
                    <div><?php echo $_GET['error']; ?></div>
                <?php endif; ?>
               
                <div class="campos">
                <div>
                    <label class="nom"for="uname">Nom d'usuari:</label>
                    <div class="input-container">
                    <input class="inpt" type="text" placeholder="Introdueix el nom d'usuari" id="uname" name="nom_usuari">
               </div> </div>
                <div>
                    <label class="nom" for="pass">Contrasenya:</label>
                    <div class="input-container">
                    <input  class="inpt" placeholder="Introdueix la contrasenya" type="password" id="pass" name="contrassenya">
                </div> </div>
                <div>
                    <button class="btn" type="submit">Iniciar sesió</button>
                    <a  class="link" href="signup.php" class="link-secondary">Registrar-se</a>
                </div>
            </div>
            </form>
        </div>
    </div>
    <div class="congrats">
    <?php if(isset($_GET['success'])): ?>
                <div><?php echo $_GET['success']; ?></div>
            <?php endif; ?>
        </div>
        <marquee class="marquee"behavior="scroll" scrollamount="50" direction="left">	&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;</marquee>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
