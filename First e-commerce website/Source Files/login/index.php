<?php
include('login.php');
if(isset($_SESSION['login_user'])){
header("location: home_l.php");
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
</head>
<body>
<link rel="stylesheet" href="../../CSS/styling.css" type="text/css" media="all">
<a id='b1' href ='../Home.php'><img height="18" width="18" src="../../Images/home.png">&nbsp;Home</a>
<a id='b2' href ='../signup.php'><img height="18" width="18" src="../../Images/signup.png">&nbsp;Signup</a>
<center><img id='i2' height="100" width="500" src="../../Images/name.png"></center><br><br><center>
<form action="" method="POST">
<h3>Please enter your details :</h3>
<input type="text" id="txt1" name="username" placeholder="Your Username.."><br>
<input type="password" id="txt1" name="password" placeholder="Your Password.."><br>
<input id="b3" name="submit" type="submit" value="Login"><br><br><b>
<?php echo $error; ?></center>
</form>
</body>
</html>