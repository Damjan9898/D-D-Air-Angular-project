<?php
header('Access-Control-Allow-Origin: *'); 



//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }


$rezultat = mysqli_query($db, "select user_id from active_user;");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }



$active_user_id = mysqli_fetch_object($rezultat);
        

$json_encode = json_encode($active_user_id);
$jsonArray = json_decode($json_encode,true);
$key = "user_id";
$userId = $jsonArray[$key];



echo json_encode($active_user_id)

?>






















