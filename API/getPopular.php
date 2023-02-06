<?php
header('Access-Control-Allow-Origin: *'); 


//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }


$rezultat = mysqli_query($db, "select * from popular;");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }
        
$Rezultati = [];


while($Rezultat = mysqli_fetch_object($rezultat))
        {
            $Rezultati[] = $Rezultat;
        }
        

echo json_encode($Rezultati);


























