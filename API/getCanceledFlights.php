<?php
header('Access-Control-Allow-Origin: *'); 


//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }


if($_GET['id']){
   $id= $_GET['id'];
}


$rezultat = mysqli_query($db, "SELECT user_flight.id, user_flight.user_id, user_flight.flight_id,user_flight.status, user_flight.seats_booked, user_flight.given_review ,flight.airline, flight.locationstart, flight.locationend, flight.time, flight.distance, flight.classflight, flight.seats, flight.price, flight.airportstart, flight.airportend, flight.description, flight.image, flight.flightstart, flight.timestart, flight.timeend, flight.airlinelogo, user.name FROM flight INNER JOIN user_flight ON flight.id = user_flight.flight_id INNER JOIN user ON user_flight.user_id = user.id WHERE user_flight.status = 'canceled' AND user_flight.user_id = '$id';");
        
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
























