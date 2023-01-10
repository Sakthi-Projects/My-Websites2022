<?php
session_start();
include "config.php";

$student_id = $_GET['id'];

$query = "DELETE FROM `students` WHERE id=$student_id";

$query_run = mysqli_query($conn, $query);

if($query_run)
    {
        $_SESSION['message'] = "Student Deleted Successfully";
        header("Location: index.php");
        exit(0);
    }
    else
    {
        $_SESSION['message'] = "Student Deleted";
        header("Location: index.php");
        exit(0);
    }
?>
