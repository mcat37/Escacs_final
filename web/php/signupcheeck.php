<?php

    include "funcions.php";
    include "db_conn.php";

    if(isset($_POST['nom_public']) &&  isset($_POST['nom_usuari']) &&  isset($_POST['contrassenya']) &&  isset($_POST['rpass'])){

        $fname=neteja($_POST['nom_public']);
        $uname=neteja($_POST['nom_usuari']);
        $pass=neteja($_POST['contrassenya']);
        $rpass=neteja($_POST['rpass']);

        $data="fname=".$fname."&uname=".$uname;
        
        if(empty($fname)){  // Comprovem si s'ha deixat el nom i cognoms

            $em="No has omplert el camp de nom i cognoms";
            header("Location:../signup.php?error=$em&$data");

            exit();

        }elseif(empty($uname)){ // Comprovem si s'ha deixat en blanc l'usuari

            $em="No has omplert el camp de l'usuari";
            header("Location:../signup.php?error=$em&$data");

            exit();

        }elseif(empty($pass)){

            $em="No has omplert el camp de la paraula de pas";
            header("Location:../signup.php?error=$em&$data");

            exit();

        }elseif(empty($rpass)){
            
            $em="No has omplert el camp de la confirmació de la paraula de pas";
            header("Location:../signup.php?error=$em&$data");

            exit();

        }elseif($pass <> $rpass){

            $em="Les paraules de pas no coincideixen";
            header("Location:../signup.php?error=$em");

            exit();

        }else{
           
            // Tot ok. Cal introduir usuari a la BD.
            // Comprovar si 'uname' ja existeix
            //Preparo consulta

            $sql="SELECT * FROM usuaris WHERE nom_usuari=?";
            $stmt=$conn->prepare($sql);
            $stmt->execute([$uname]);
            if($stmt->rowCount()>0){
                $em="Aquest nom d'usuari ja existeix";
                header("Location:../signup.php?error=$em&$data");
                exit();
            }else{

                // El nom d'usuari esta lliure
                // Xifrem la paraula de pas
                
                $passXifrat=xifrar($pass);
                
                // 1.- PREPARO CONSULTA

                $sql="INSERT INTO usuaris (nom_public,nom_usuari,contrassenya) VALUES (?,?,?)";
                $stmt=$conn->prepare($sql);

                // 2.- Executa sentència SQL

                $stmt->execute([$fname,$uname,$passXifrat]);
                
                // 3.- Tanco la connexió

                $stmt=null;

                header("Location:../signup.php?success=El teu compte s'ha registrat correctament.");
            }
        }

    }else{

        header("Location:../signup.php?error=error");
        
    }

?>