<?php

header('Access-Control-Allow-Origin: *'); 


//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }





if($_POST['user_flight_id']){
	$user_flight_id = (int) $_POST['user_flight_id'];
}

$rezultat = mysqli_query($db, "UPDATE user_flight SET given_review=1 WHERE id='$user_flight_id';");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }



echo json_encode($rezultat);


?>