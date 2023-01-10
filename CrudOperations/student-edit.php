<?php
session_start();

include 'config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Student_Creation</title>
</head>
<body>

<div class="container mt-5">

<?php include 'message.php'?>

    <div class="row">
        <div class="col-md-12 mt-3">
            <div class="card">
                <div class="card-header">
                    <h4>Students Add
                        <a href="index.php" class="btn btn-danger float-end">BACK</a>
                    </h4>
                </div>
                <div class="card-body">
                
                <?php
                    if(isset($_GET['id']))
                    {
                        $student_id = mysqli_real_escape_string($conn, $_GET['id']);
                        $query = "SELECT * FROM students WHERE id='$student_id' ";
                        $query_run = mysqli_query($conn, $query);
                    }
                    
                    if(mysqli_num_rows($query_run) > 0)
                    {

                        $student = mysqli_fetch_array($query_run);
                        ?>
                
                    <form action="code.php" method="POST">
                        <input type="hidden" name="student_id" value="<?=$student['id']?>">

                            <div class="mb-3">
                                <label for="">Student Name</label>
                                <input type="text" name="name" value="<?= $student['name'] ?>" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="">Student Email</label>
                                <input type="email" name="email" value="<?= $student['email'] ?>" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="">Student Phone</label>
                                <input type="text" name="phone" value="<?= $student['phone'] ?>" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="">Student Course</label>
                                <input type="text" name="course" value="<?= $student['course'] ?>" class="form-control">
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-dark" name="update">Update Student</button>
                            </div>
                    </form>
                <?php

                    }
                    else{
                        echo "<h4> No Such ID Found";
                    }


                    ?>
                </div>
            </div>
        </div>
    </div>
</div>




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>