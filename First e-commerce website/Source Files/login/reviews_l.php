<html>
<head><title>Reviews</title></head>
<body>
<link rel="stylesheet" href="../../CSS/styling.css" type="text/css" media="all">
<a id='b1' href ='home_l.php'><img id="i1" src="../../Images/home.png">&nbsp;Home</a>
<a id='b1' href ='shopping_l.php'><img id="i1" src="../../Images/cart.png">&nbsp;Game-ON Shop</a>
<a id='b2' href ='logout.php'><img id="i1" src="../../Images/logout.png">&nbsp;Logout</a><br><br>
<center><img id='i2' src="../../Images/name.png"></center><br><br>
<?php
$con = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
if (!$con) {
die("Failed to connect: " . mysqli_connect_error());
}
$it_id = $_GET['id'];

$retrieve = "SELECT * FROM reviews where id='$it_id'";
$result = mysqli_query($con, $retrieve);
echo "<table cellpadding='15'>";
while($row = mysqli_fetch_assoc($result))
{
echo "<tr>";
echo "<td>" . "<img src = " . '"../../Images/' . $row['image'] . '"' . 'height ="200" width="150">';
echo "<td><b>" . $row['name']." :</b><br/><br/>".$row['review'] . "</td>";
}
echo "</table><br><br><center>";
echo '<a id="b3" href="desc_l.php?i_id='.$it_id.'"'.'>Go Back</a>';
mysqli_close($con);
?>
</body>
</html>