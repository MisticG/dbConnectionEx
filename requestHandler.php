<?php

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if($_POST['getType'] == 'getAll') {
            echo json_encode("Hello");  
    } else {
        echo json_encode("No Post");
    }
}

?>