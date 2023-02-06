<?php
header('Access-Control-Allow-Origin: *'); 



//mysqli_connect ("host", "username", "password", "database_name")
    $db=mysqli_connect("localhost", "root", "", "test");

    if(!$db)
    {
        exit("Doslo je do greske sa povezivanje sa bazom!");
    }


if($_POST['userid']){
    $userid = $_POST['userid'];
   
}




$rezultat = mysqli_query($db, "insert into active_user (user_id) values ('$userid');");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }






?>