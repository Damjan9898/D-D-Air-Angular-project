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




mysqli_query($db, "DELETE FROM active_user WHERE user_id = '$userid';");
        
        if(mysqli_error($db))
        {
            exit(mysqli_error($db));
        }



?>














