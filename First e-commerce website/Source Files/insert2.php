<html>
<head><title>Thankyou</title></head>
<body>
<link rel="stylesheet" href="../CSS/styling.css" type="text/css" media="all">
<?php
extract($_POST);
?>
<?php
$username = $username;
$first_name = $fname;
$last_name = $lname;
$email = $email;
$password = $pass;
$con = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
if (!$con) {
die("Failed to connect: " . mysqli_connect_error());
}
if ($username!="" && $first_name!="" && $last_name!="" && $email!="" && $password!=""){
$ADD = "INSERT INTO user_accounts VALUES('$username','$first_name','$last_name','$email','$password');";
if (!mysqli_query($con, $ADD)) {
die("Couldn't Sign you up because " .
mysqli_error($con));
}
echo "<br><center><h2 id='ty'>Thankyou for being a Member</center><br>";
echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="b3" href="home.php">Go to HomePage</a>';
}
else{
echo "<br><center><h2 id='ty'>Sorry but you can't Leave any field blank.</center><br>";
echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="b3" href="signup.php">Go Back</a>';
}
mysqli_close($con);
?>
</body>
</html>