<?php
header('Access-Control-Allow-Origin: *'); 



//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }


if($_GET['id']){
  $id = $_GET['id'];
}


$rezultat = mysqli_query($db, "select * from review where review.flight_id = '$id';");
        
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
























