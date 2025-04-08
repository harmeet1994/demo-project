<?php 
include '../config.php';
$blogId = $_REQUEST['id'];
$queryUpdate = "DELETE FROM wp_job_postings WHERE Id = '$blogId'";
$resultUpdate = mysqli_query($conn,$queryUpdate);
if($resultUpdate){
    echo "success";
}
?>