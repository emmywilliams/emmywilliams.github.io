<?php
if (isset($_POST['submit'])) {
$servername ="localhost";
$username = "root";
$password = "";
$dbname = "youth";

$conn = mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
  die("Could not connect to server: " . mysqli_connect_error()); 
}

$name = mysqli_real_escape_string($conn,$_POST['name']); 
$email = mysqli_real_escape_string($conn,$_POST['email']);
$date = mysqli_real_escape_string($conn,$_POST['date']);
$time = mysqli_real_escape_string($conn,$_POST['time']);

if (empty($name) || empty($email) || empty($date) || empty($time)){
  header("Location: ../index.php?message=emptyfields");
  exit();
}

$sql ="INSERT INTO appointment (name, email, date, time) VALUES (?, ?, ?, ?);";

$stmt =mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $sql)){
  echo "Error";
} else {
  mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $date, $password);
  mysqli_stmt_execute($stmt);
}

header("Location: ../index.php?message=success");

}