<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Bootstrap 101 Template</title>

  <!-- Bootstrap -->
  <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../bootstrap/js/bootstrap.min.js"></script>

<body>
  <script>
  var $R1 = 'AA';
  var $G1 = 'BB';
  var $B1 = 'CC';
    function brghtdiff($R1, $G1, $B1, $R2, $G2, $B2) {
      //目標 < 125
      //BR1 為已知固定值
      $BR1 = (299 * $R1 + 587 * $G1 + 114 * $B1) / 1000;
      $BR2 = (299 * $R2 + 587 * $G2 + 114 * $B2) / 1000;
      // math 去絕對值 若 A>=0 則 A = A , A<0 A= -A
      //$BR2 =
      return abs($BR1 - $BR2);
    }
  </script>
</body>

</html>
