<?php
header('Access-Control-Allow-Origin: *'); 


//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }





if($_POST['name'] && $_POST['surname'] && $_POST['address'] && $_POST['telephone'] && $_POST['email'] && $_POST['password'] && $_POST['destination'] ){




$name = mysqli_real_escape_string($db, $_POST['name']);
$surname = mysqli_real_escape_string($db, $_POST['surname']);
$address = mysqli_real_escape_string($db, $_POST['address']);
$telephone = mysqli_real_escape_string($db, $_POST['telephone']);
$email = mysqli_real_escape_string($db, $_POST['email']);
$password = mysqli_real_escape_string($db, $_POST['password']);
$destination = mysqli_real_escape_string($db, $_POST['destination']);



$rezultat = mysqli_query($db, "insert into user (name, surname, address, telephone, email, password, destination) values ('$name', '$surname', '$address', '$telephone', '$email', '$password', '$destination');");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }
}




$novaPutanja = "/";


echo json_encode($novaPutanja);


?>
