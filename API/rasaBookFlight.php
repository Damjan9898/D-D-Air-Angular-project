<?php
header('Access-Control-Allow-Origin: *'); 


//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }





if($_GET['flight_id'] && $_GET['seats_booked'] && $_GET['user_id']){




$flight_id = mysqli_real_escape_string($db, $_GET['flight_id']);
$seats_booked = mysqli_real_escape_string($db, $_GET['seats_booked']);
$user_id = mysqli_real_escape_string($db, $_GET['user_id']);



$rezultat = mysqli_query($db, "insert into user_flight (user_id, flight_id, seats_booked, status) values ('$user_id', '$flight_id', '$seats_booked', 'upcoming');");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }
}




header('Location: http://localhost:4200/journal');


?>
