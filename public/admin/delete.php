<?php 
include '../config.php';
$blogId = $_REQUEST['id'];
$queryUpdate = "DELETE FROM wp_blogs WHERE ID = '$blogId'";
$resultUpdate = mysqli_query($conn,$queryUpdate);
if($resultUpdate){
    echo "success";
}
?>