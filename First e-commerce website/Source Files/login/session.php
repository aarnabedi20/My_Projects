<?php
$connection = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
session_start();
$user_check = $_SESSION['login_user'];
$ses_sql = mysqli_query($connection, "SELECT username from user_accounts where username ='$user_check'");
$rows = mysqli_fetch_assoc($ses_sql);
$login_session =$rows['username'];
if(!isset($login_session)){
mysqli_close($connection);
header('Location: index.php');
}
?>