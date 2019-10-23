<?php
session_start();
extract($_POST);
$error='';
if (isset($_POST['submit'])) {
if (empty($_POST['username']) || empty($_POST['password'])) {
$error = "Username or Password is invalid";
}
else
{
$connection = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
$query = mysqli_query($connection,"SELECT * from user_accounts where username='$username' AND password='$password';");
$rows = mysqli_num_rows($query);
if ($rows == 1) {
$_SESSION['login_user']=$username;
header("location: home_l.php");
} else {
$error = "Username or Password is invalid";
}
mysqli_close($connection);
}
}
?>