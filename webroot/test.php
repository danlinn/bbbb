<?php
  $username = "mtu";
  $password = "mtu";
  $hostname = "127.0.0.1";
  $name = "crazy";

  if (isset($_GET['name'])) {
    $name = $_GET['name'];
  }

  //connection to the database
  $dbhandle = mysql_connect($hostname, $username, $password)
  or die("Unable to connect to MySQL");
  echo "Connected to MySQL<br><br>";
  $selected = mysql_select_db("mtu",$dbhandle)
  or die("Could not select examples");

  //$query='SELECT * FROM cats c inner join owners o on c.owner_id = o.id WHERE name="' . mysql_real_escape_string($name) . '"';
  $query='SELECT * FROM cats c inner join owners o on c.owner_id = o.id WHERE name="' . $name . '"';

  $result=mysql_query($query);
  if($result === FALSE) {
    die(mysql_error()); // TODO: better error handling
  }
  echo 'Cats owned by ' . $name . ':</br>';
  while($row = mysql_fetch_array($result)) {
   echo "Owner Name:" . $row{'name'} . " Address:" . $row{'address'} . " Color:" . $row{'color'} . " Fixed? " . $row{'fixed'} . "<br>";
  }
  mysql_close();
?>
