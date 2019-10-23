<html>
<head><title>Thankyou</title></head>
<body>
<link rel="stylesheet" href="../../CSS/styling.css" type="text/css" media="all">
<?php
extract($_POST);
?>
<?php
$it_id = $_GET['id'];
$name = $cust_name;
$re = $review;
$con = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
if (!$con) {
die("Failed to connect: " . mysqli_connect_error());
}
if ($name!="" && $re!=""){
$ADD = "INSERT INTO reviews VALUES('$it_id','user.png','$name','$re');";
if (!mysqli_query($con, $ADD)) {
die("Couldn't add your review because " .
mysqli_error($con));
}
echo "<br><center><h2 id='ty'>Thankyou</center><br>";
echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="b3" href="desc_l.php?i_id='.$it_id.'"'.'>Go Back</a>';
}
else{
echo "<br><center><h2 id='ty'>Sorry but you can't Leave any field blank.</center><br>";
echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="b3" href="desc_l.php?i_id='.$it_id.'"'.'>Go Back</a>';
}
mysqli_close($con);
?>
</body>
</html>