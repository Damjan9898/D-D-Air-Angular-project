<?php
header('Access-Control-Allow-Origin: *'); 



//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }





if($_POST['flight_id'] && $_POST['seats_booked'] && $_POST['user_id'] ){




$flight_id = mysqli_real_escape_string($db, $_POST['flight_id']);
$seats_booked = mysqli_real_escape_string($db, $_POST['seats_booked']);
$user_id = mysqli_real_escape_string($db, $_POST['user_id']);



$rezultat = mysqli_query($db, "insert into user_flight (user_id, flight_id, seats_booked, status) values ('$user_id', '$flight_id', '$seats_booked', 'upcoming');");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }
}




$novaPutanja = "/";


echo json_encode($novaPutanja);


?>
