<html>
<head><title>Sign Up</title></head>
<body>
<link rel="stylesheet" href="../CSS/styling.css" type="text/css" media="all">
<a id='b1' href ='Home.php'><img id="i1" src="../Images/home.png">&nbsp;Home</a>
<a id='b2' href ='login/index.php'><img id="i1" src="../Images/login.png">&nbsp;Login</a>
<center><img id='i2' src="../Images/name.png"></center><br><br>
<?php
echo "<center><form action='insert2.php' method='POST'>";
echo "<h3>Please enter your details :</h3>";
echo '<input type="text" id="txt1" name="fname" placeholder="Your First Name..">';
echo '&nbsp;<input type="text" id="txt1" name="lname" placeholder="Your Last Name.."><br/>';
echo '<input type="text" id="txt1" name="username" placeholder="Choose a Username.."><br>';
echo '<input type="text" id="txt1" name="email" placeholder="Your Email.."><br>';
echo '<input type="password" id="txt1" name="pass" placeholder="Choose a Password.."><br>';
echo '<input id="b3" type="submit" value="Sign Up">';
echo "</form></center>";
mysqli_close($con);
?>
</body>
</html>