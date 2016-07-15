<?php
 define('HOST','localhost');
 define('USERNAME', 'root');
 define('PASSWORD','');
 define('DB','carpatsoft_db');
 
 $con = mysqli_connect(HOST,USERNAME,PASSWORD,DB);

$thought = $_POST['thought'];

 $sql = "insert into thoughts (thought, ip) values ('$thought','$thought')";
 
 if(mysqli_query($con, $sql)){
 echo 'success';
 }
 
?>
