<?php require_once 'header.php';?>
<br>
<div class="container">
	<div class="row">
		<div class="col-md-3"></div>
		<div class="col-md-6 w3-border" style="background-color:#e8e8e8;">
		   <br>
		<img id="profile-img" style="width: 96px; height: 96px; margin: 0 auto 10px; display: block; border-radius: 50%;" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            
		<div class="w3-padding-5 text-center w3-text-indigo w3-round-xxlarge ml-5 mr-5 w3-white"><h2>User/Reciever Login</h2></div>
		<form action="/bbms" method="post">
				<div class="form-group">
				    <label for="user_username">Username</label>
				    <input type="text" class="form-control user_login" id="user_username" placeholder="Enter username" required>
				</div>
				<div class="form-group">
				    <label for="user_password">Password</label>
				    <input type="password" class="form-control user_login" id="user_password" placeholder="Enter Password" maxlength=12 minlength=6 required>
				</div>
				<br>
				<div class="form-group">
				<button type="submit" class="btn btn-outline-primary" style="margin-left:180px;" id="user_login_btn">Login</button>
				</div>
				</form>
				<br>
		</div>
		<div class="col-md-3"></div>
	</div>
</div>

<?php require_once 'footer.php'; ?>
<script src="js/login_user.js"></script>