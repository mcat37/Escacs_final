<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Registrar-se</title>
    <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    <div class="contenedor2" >
        
        <form class="formulario2"action="php/signupcheeck.php"  method="post">
            <h4 >Creació de la compta</h4>

                <!-- ---     ZONA D´ERRORS  ------   -->
                <?php  if(isset($_GET['error'])) :   ?>
                    <div >
                        <?php echo htmlspecialchars($_GET['error']); ?>
                    </div>
                <?php  endif ; ?>

                <!-- ---     ZONA D´OK ------        -->
                <?php  if(isset($_GET['success'])) :   ?>
                    <div >
                        <?php echo htmlspecialchars($_GET['success']); ?>
                    </div>
                <?php  endif ; ?>


                <!--   ------------------------       -->
<div class="campos2">
            <div >
             <label class="nom2" for="fname" >Nom d'usuari:</label>
             <div class="input-container2">
             <input class="inpt2" type="text" placeholder="Introdueix el teu nom" id="fname" name="nom_usuari" value="<?php echo isset($_GET['fname'])? htmlspecialchars($_GET['fname']):"" ?>" >
            </div></div>
            
            <div >
             <label class="nom2" for="uname" >Nom públic</label>
             <div class="input-container2">
             <input class="inpt2" type="text" placeholder="Introdueix el nom d'usuari" id="uname" name="nom_public" value="<?php echo isset($_GET['uname'])? htmlspecialchars($_GET['uname']):"" ?>">
            </div> </div>
            
            <div >
             <label class="nom2" for="email" >Email:</label>
             <div class="input-container2">
             <input class="inpt2" type="text" placeholder="Introdueix el email" id="email" name="email" value="<?php echo isset($_GET['email'])? htmlspecialchars($_GET['email']):"" ?>">
            </div> </div>


            <div >
             <label class="nom2" for="pass" >Contrassenya:</label>
             <div class="input-container2">
             <input class="inpt2" type="password" placeholder="Introdueix la contrasenya" id="pass" name="contrassenya">
            </div> </div>

            <div >
             <label class="nom2"for="rpass" >Confirma la contrassenya:</label>
             <div class="input-container2">
             <input class="inpt2" type="password" placeholder="Confirma la contrasenya"  id="rpass" name="rpass">
            </div></div> 

            <div class="butons">
                <button type="button" class="btn2" >Registrate</button>
                <a class="link2" href="index.php" >Inicia sessión</a>
            </div>

</div>
        </form>
    </div>

    <marquee class="marquee"behavior="scroll" scrollamount="50" direction="left">	&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;&#9812; &#9813; &#9814;&#9815;&#9816;	&#9817;	&#9818;	&#9819;&#9820;	&#9821;	&#9822;&#9823;</marquee>
  </body>
</html>