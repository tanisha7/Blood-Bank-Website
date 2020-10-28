<?php require_once 'header.php';
$blood=json_decode(bloodList());
?>

<br>
<div class="container">
	<div class="row">
		<div class="col-md-3"></div>
		<div class="col-md-6 w3-border" style="background-color:#e8e8e8;">
		   <br>
		<img id="profile-img" style="width: 96px; height: 96px; margin: 0 auto 10px; display: block; border-radius: 50%;" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            
		<div class="w3-padding-5 text-center w3-text-indigo w3-round-xxlarge ml-5 mr-5 w3-white"><h2>User/Reciever Register</h2></div>

		<form action="/bbms" method="post">
		  <div class="form-group">
		    <label for="username">Username</label>
	      		 <input type="text" class="form-control register" id="username" aria-describedby="usernameHelp" placeholder="Enter username" autocomplete="off" required>
		      <small id="usernameHelp" class="form-text text-muted">Username is your unique identity which is used for login.<span id="check_user"></span></small>
		  </div>
			
		  <div class="row">
		  	<div class="form-group col-md-6">
			    <label for="first_name">First Name</label>
			    <input type="text" class="form-control register" id="first_name" placeholder="Enter First Name" autocomplete="off" required>
			  </div>
			  <div class="form-group col-md-6">
			    <label for="last_name">Last Name</label>
			    <input type="text" class="form-control register" id="last_name" placeholder="Enter Last Name" autocomplete="off" required>
			  </div>
		  </div>
		  <div class="form-group">
		    <label for="password">Password</label>
		    <input type="password" class="form-control register" id="password" placeholder="Password must be atleast 6 characters long" maxlength=12 minlength=6 required>
		  </div>
		  <div class="form-group">
			  <label for="mobile">Mobile</label>
			  <input type="tel" class="form-control register" id="mobile" placeholder="Enter 10 digit mobile number" autocomplete="off" maxlength=10 minlength=10 required>
		  </div>
		  <div class="form-group">
		    <label for="blood">Blood Group</label>
		    <select class="form-control" id="blood">
		      <?php
		      	for($i=0;$i<sizeof($blood->blood);$i++){
		      		echo '<option value="'.$blood->blood[$i]->blood_id.'">'.$blood->blood[$i]->blood.'</option>';
		      	}
		      ?>
		    </select>
		  </div>
		 <div class="form-group">
		<button type="submit" class="btn btn-outline-primary" style="margin-left:160px;" id="register">Register</button>
		</div>
		</form>
		</div>
		<div class="col-md-3"></div>
	</div>
</div>

<?php require_once 'footer.php'; ?>

<script src="js/register_user.js"></script>
