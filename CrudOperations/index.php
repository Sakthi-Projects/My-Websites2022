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
    <title>Students Data</title>
</head>
<body>
 
<div class="container mt-5">

<?php include 'message.php'?>

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header d-flex justify-content-around bg-warning">
                    <h4>Student Details</h4>
                    <a href="student.php" class="btn btn-dark float-end">Add New</a>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>STUDENT NAME</th>
                                <th>STUDENT EMAIL</th>
                                <th>STUDENT PHONE</th>
                                <th>STUDENT COURSE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                $query = "SELECT * FROM students";
                                $query_run = mysqli_query($conn, $query);

                                if($query_run)
                                {

                                   foreach($query_run as $student)
                                    {
                                        {
                                    
                                    
                                            ?>
                                             <tr>
                                             <td><?= $student['id']; ?></td>
                                                <td><?= $student['name']; ?></td>
                                                <td><?= $student['email']; ?></td>
                                                <td><?= $student['phone']; ?></td>
                                                <td><?= $student['course']; ?></td>
                                                <td>
                                                    <a href="student-view.php?id=<?= $student['id']; ?>" class="btn btn-info btn-sm">View</a>
                                                    <a href="student-edit.php?id=<?= $student['id']; ?>" class="btn btn-success btn-sm">Edit</a>
                                                    <a href="student-delete.php?id=<?= $student['id']; ?>" class="btn btn-danger btn-sm">Delete</a>     
                                    
                                       
                                                </td>
                                            </tr>                                   
                                            <?php
        
                                        }  
                                    }

                                }
                                else{
                                    echo "<h5> No Record Found </h5>";
                                }
                            ?>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>







<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>