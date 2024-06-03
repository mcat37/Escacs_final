<?php
 session_start();

    if(isset($_POST['nom_usuari']) && isset($_POST['contrassenya'])){
        include "db_conn.php";
        include "funcions.php";

        $uname=neteja($_POST['nom_usuari']);
        $pass=neteja($_POST['contrassenya']);
        // echo "<br> Nom d´usuari: ". $uname;
        // echo "<br> Contrasenya: " . $pass;

        if(empty($uname)){
            $em="No has posat el nom d´usuari";
            header("Location:../index.php?error=$em");
            exit;
        }elseif(empty($pass)){
            $em="No has possat la contrasenya";
            header("Location:../index.php?error=$em&uname=$uname");
            exit;
        }else{
            //veure si aquest usuari existeix a la base de dades
            $sql="SELECT * FROM usuaris WHERE nom_usuari=?";
            $stmt=$conn->prepare($sql);
            $stmt->execute([$uname]);
            //var_dump($stmt);
            //exit;
            //m'interesa quants registres compleixen aquesta condició
            if($stmt->rowCount()===1){
                //Existeix aquest usuari
                $user=$stmt->fetch();
                //var_dump($user);
                //exit;
                $username=$user['nom_usuari'];
                $fname=$user['nom_public'];
                $password=$user['contrassenya'];
                $id=$user['id_usuari'];
               // echo "<br>Nom d'usuari: ".$nombreUsuario;
               // echo "<br>Nom complert: ".$nombreCompleto;
               // echo "<br>password:".$contrasena;
                //echo "<br>id:".$id;
                //exit;
                if( $username===$uname){
                    //tornem a comprovar que el nom d'usuari de la bd es igual al nom d'usuari del formulari.

                    //verifiquem contrasenyas

                    if(password_verify($pass,$password)){
                        //Si són iguals creo variables de sessió
                        $_SESSION['id']=$id;
                        $_SESSION['nom_public']=$fname;
                        header("Location:../playS.php");
                        exit();
                    }else{
                        //contrasenya incorrecta
                        $em="Usuari i/o contrasenya incorrectes";
                        header("Location:../index.php?error=$em&uname=$uname");
                        exit();
                    }

                }else{
                    //En cas contrari
                    //Nom d'usuari incorrecte
                    $em="Usuari i/o contrasenya incorrectes";
                    header("Location:../index.php?error=$em&uname=$uname");
                    
                    exit();
                }


            }
            else{
                //Aquest nom d'usuari no existeix a la BD
                $em="Usuari i/o contrasenya incorrectes";
                header("Location:../index.php?error=$em&uname=$uname");
            }
        }




    }else{
        // algú intenta accedir directament en aquesta pàgina
        header("Location:../index.php?error=No has iniciat sessió" . $uname);
        exit;
    }



?>