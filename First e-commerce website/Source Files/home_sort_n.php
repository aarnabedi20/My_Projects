<html>
<head><title>Game-ON.com</title></head>
<body>
<link rel="stylesheet" href="../CSS/styling.css" type="text/css" media="all">
<form action="search.php" method='POST'><a id='b1' href ='Home.php'><img id="i1" src="../Images/home.png">&nbsp;Home</a>
<a id='b1' href ='shopping.php'><img id="i1" src="../Images/cart.png">&nbsp;Game-ON Shop</a>
&nbsp;&nbsp;&nbsp;<input id="search" name="search" type="text" name="search" placeholder="Search..">&nbsp;&nbsp;<input id="b3" type="submit" value="Search">
<a id='b2' href ='login/index.php'><img id="i1" src="../Images/login.png">&nbsp;Login</a>
<a id='b2' href ='signup.php'><img id="i1" src="../Images/signup.png">&nbsp;Sign Up</a></form><br><br>
<center><img id='i2' src="../Images/name.png"></center><br><br>
<center><a id ='b3' href="home_sort_n.php">Sort By Name</a>&nbsp;&nbsp;<a id='b3' href="home_sort_p.php">Sort By Price</a></center><br>
<?php
$con = mysqli_connect("REMOTE_LINK", "USERNAME", "PASSWORD", "DATABASE");
if (!$con) {
die("Failed to connect: " . mysqli_connect_error());
}
$retrieve = "SELECT * FROM pc_games_list ORDER BY name";
$result = mysqli_query($con, $retrieve);
echo "<center><table cellpadding='15'>";
while($row = mysqli_fetch_assoc($result))
{
echo "<tr>";
echo "<td>" . "<img src = " . '"../Images/' . $row['image'] . '"' . 'height ="200" width="150">';
echo "<td>" .'<a id="d" href="desc.php?i_id='.$row['ID'].'"'.'><h3 id="tooltip">Full Description</h3>'. $row['name'] .'</a>'. "</td>";
echo "</td>";
echo '<td>&nbsp;&nbsp;<a id="b3" href="shopping.php"><img id="i1" src="../Images/cart.png">&nbsp;Go To Shop</a><br/></td>';
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
