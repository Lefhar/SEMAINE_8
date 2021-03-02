<?php
include("db.php");
// sélection d'une base de données
$db = $mng->voitures;

// sélectionne une collection (analogue à une table de base de données relationnelle)
$collection = $db->modeles;

// récupère tout de la collection
$cursor = $collection->find();

// traverse les résultats
foreach ($cursor as $document) {
    echo $document["mod_nom"] . "\n";
}

?>