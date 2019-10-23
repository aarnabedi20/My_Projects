<?php
include('session.php');
?>
<html>
<head><title>Game-ON.com</title></head>
<body>
<link rel="stylesheet" href="../../CSS/styling.css" type="text/css" media="all">
<form action="search_l.php" method='POST'><a id='b1' href ='home_l.php'><img id="i1" src="../../Images/home.png">&nbsp;Home</a>
<a id='b1' href ='shopping_l.php'><img id="i1" src="../../Images/cart.png">&nbsp;Game-ON Shop</a>
&nbsp;&nbsp;&nbsp;<input id="search" name="search" type="text" name="search" placeholder="Search..">&nbsp;&nbsp;<input id="b3" type="submit" value="Search">
<a id='b2' href ='logout.php'><img id="i1" src="../../Images/logout.png">&nbsp;Logout</a></form><br><br>
<center><img id='i2' src="../../Images/name.png"></center><br><br>
<center><a id ='b3' href="home_sort_n_l.php">Sort By Name</a>&nbsp;&nbsp;<a id='b3' href="home_sort_p_l.php">Sort By Price</a></center><br>
<?php
$con = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
if (!$con) {
die("Failed to connect: " . mysqli_connect_error());
}
$retrieve = "SELECT * FROM pc_games_list ORDER BY price";
$result = mysqli_query($con, $retrieve);
echo "<center><table cellpadding='15'>";
while($row = mysqli_fetch_assoc($result))
{
echo "<tr>";
echo "<td>" . "<img src = " . '"../../Images/' . $row['image'] . '"' . 'height ="200" width="150">';
echo "<td>" .'<a id="d" href="desc_l.php?i_id='.$row['ID'].'"'.'><h3 id="tooltip">Full Description</h3>'. $row['name'] .'</a>'. "</td>";
echo "</td>";
echo '<td>&nbsp;&nbsp;<a id="b3" href="shopping_l.php"><img id="i1" src="../../Images/cart.png">&nbsp;Go To Shop</a><br/></td>';
echo "</tr>";
echo "<tr>";
echo "<td>" . "Price : " . "£" . $row['price'] . "</td>";
echo "</tr>";
}
echo "</table></center>";
mysqli_close($con);
?>
</body>
</html>