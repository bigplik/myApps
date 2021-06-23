<?php
//in php can't use live server,
//instead can use PHP server to open code in browser
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>