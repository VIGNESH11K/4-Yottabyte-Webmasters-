<?php
  ob_start();
  require_once('includes/load.php');
  if($session->isUserLoggedIn(true)) { redirect('home.php', false);}
?>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width-device-width, initial scale=1.0" >
	<title>Login Form</title>
	<link rel="stylesheet" type="text/css" href="../LAND/assets/css/styles.css">
</head>


	<section>
		<div class="color"></div>
		<div class="color"></div>
		<div class="color"></div>
		<div class="box">
		<div class="square" style="--i:0;"></div>
		<div class="square" style="--i:1;"></div>
		<div class="square" style="--i:2;"></div>
		<div class="square" style="--i:3;"></div>
		<div class="square" style="--i:4;"></div>
    <div class="login-page">
        <div class="container">
            <div class="center">
			<div class="form">
				<h2>Login Form</h2>
        <?php echo display_msg($msg); ?>
      <form method="post" action="auth.php" class="clearfix">
        <div class="form-group">
					<div class="inputBox">
          <input type="name" class="form-control" name="username" placeholder="Username">
					</div>
          </div>
          <div class="form-group">
					<div class="inputBox">
          <input type="password" name= "password" class="form-control" placeholder="Password">
					</div>
          </div>
          <div class="form-group">
          <div class="inputBox button" >
          <input type="Submit" class="btn btn-danger" value="Login" style="border-radius:0%"></input>
          </div>
				</form>
			</div>
        </div>
		</div>
	</div>
</div>
	</section>



<?php include_once('layouts/footer.php'); ?>
