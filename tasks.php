<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('HTTP/1.1 200 OK');

$tasksInfo=  file_get_contents('https://api.myjson.com/bins/b9ix6');
$arr=  json_encode($tasksInfo);
print_r(json_decode($arr));
