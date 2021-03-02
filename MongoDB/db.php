<?php
 echo extension_loaded("mongodb") ? "loaded\n" : "not loaded\n";
// $m = new MongoClient("mongodb://mongodb:@localhost:27017");
//$m = new MongoClient(); 

$mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");
