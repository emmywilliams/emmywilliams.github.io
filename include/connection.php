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

$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn,$_POST['email']);
$subject = mysqli_real_escape_string($conn,$_POST['subject']); 
$message = mysqli_real_escape_string($conn,$_POST['message']);

if (empty($name) || empty($email) || empty($subject) || empty($message)){
  header("Location: ../index.php?message=emptyfields");
  exit();
}

$sql ="INSERT INTO message (name, email, subject, message) VALUES (?, ?, ?, ?);";

$stmt =mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $sql)){
  echo "Error";
} else {
  mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $subject, $message);
  mysqli_stmt_execute($stmt);
}

header("Location: ../index.php?message=success");

}