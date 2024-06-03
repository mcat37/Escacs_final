<?php

//     -----   DEFINICIONS DE FUNCIONS AUXILIARS  -----



// -- Funció que neteja camps del formulari per evitar XSS (Cross-Site Scripting)

function neteja($dada){

    $dada=trim($dada);
    $dada=stripslashes($dada);
    $dada=htmlspecialchars($dada);
    return $dada;
    
}

// Funció que xifra la paraula de pas

function xifrar($dada){

    $options = [
        'memory_cost' => 2048,
        'time_cost' => 10, // 10 iteraciones

    ];

    $password_xifrat=password_hash($dada,PASSWORD_ARGON2ID,$options);
    return $password_xifrat;

}

?>