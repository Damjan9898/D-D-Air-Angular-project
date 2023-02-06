<?php
header('Access-Control-Allow-Origin: *'); 


//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }





if($_POST['flight_id'] && $_POST['comment'] && $_POST['rating'] && $_POST['name']){



$flight_id = mysqli_real_escape_string($db,$_POST['flight_id']);
$comment = mysqli_real_escape_string($db, $_POST['comment']);
$rating = mysqli_real_escape_string($db, $_POST['rating']);
$name = mysqli_real_escape_string($db, $_POST['name']);

}





$rezultat = mysqli_query($db, "insert into review (flight_id, `comment`, rating, name) values ('$flight_id', '$comment', '$rating', '$name');");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }





$novaPutanja = "/";


echo json_encode($novaPutanja);


?>

