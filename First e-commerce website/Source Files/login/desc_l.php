<html>
<head><title>Item Description</title></head>
<body>
<link rel="stylesheet" href="../../CSS/styling.css" type="text/css" media="all">
<a id='b1' href ='home_l.php'><img id="i1" src="../../Images/home.png">&nbsp;Home</a>
<a id='b1' href ='shopping_l.php'><img id="i1" src="../../Images/cart.png">&nbsp;Game-ON Shop</a>
<a id='b2' href ='logout.php'><img id="i1" src="../../Images/logout.png">&nbsp;Logout</a><br>
<center><img id='i2' src="../../Images/name.png"></center><br><br>
<?php
$con = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
if (!$con) {
die("Failed to connect: " . mysqli_connect_error());
}
$it_id = $_GET['i_id'];

$retrieve = "SELECT * FROM pc_games_list where ID='$it_id'";
$result = mysqli_query($con, $retrieve);
echo "<center><table cellpadding='15'>";
while($row = mysqli_fetch_assoc($result))
{
echo "<tr>";
echo "<td>" . "<img src = " . '"../../Images/' . $row['image'] . '"' . 'height ="200" width="150">';
echo "<td><b>" . $row['name']." :</b><br/><br/>".$row['description'] . "</td>";
echo "</td>";
echo '<td><center>'. $row['name']."<br/><br/>Price : " . "£" .$row['price']. '</center><br/><br/><br/>&nbsp;&nbsp;<a id="b3" href="shopping_l.php"><img id="i1" src="../../Images/cart.png">&nbsp;Go To Shop</a><br/>' . '</td>';
echo "</tr>";
echo "<tr>";
echo "<td>" . "Price : " . "£" . $row['price'] . "</td>";
echo "</tr>";
}
echo "</table></center>";
echo "<form action='reviews_l.php?id=".$it_id."'". "method='POST'>";
echo '<input id="b3" type="submit" value="Read Reviews">';
echo "</form>";
echo "<center><form action='insert1_l.php?id=".$it_id."'". "method='POST'>";
echo "<h3>Leave a Review:</h3>";
echo '<input type="text" id="txt" name="cust_name" placeholder="Your Name..">';
echo '<input type="text" id="txt" name="review" placeholder="Your Review.."><br>';
echo '<input id="b3" type="submit">';
echo "</form></center>";
mysqli_close($con);
?>
</body>
</html>