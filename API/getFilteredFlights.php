<?php
header('Access-Control-Allow-Origin: *'); 



//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }


if($_GET['airline'] && $_GET['locationstart'] && $_GET['locationend'] && $_GET['classflight'] && $_GET['flightstart']){
  $airline = $_GET['airline'];
  $locationstart = $_GET['locationstart'];
  $locationend = $_GET['locationend'];
  $classflight = $_GET['classflight'];
  $flightstart = $_GET['flightstart'];
}

$rezultat = mysqli_query($db, "select * from flight WHERE flight.airline = '$airline' AND flight.locationstart = '$locationstart' AND flight.locationend = '$locationend' AND flight.classflight = '$classflight' AND flight.flightstart = '$flightstart';");
        
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
























