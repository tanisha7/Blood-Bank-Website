<?php require_once 'header.php';
loginCheckHospitalRedirect();
$blood=json_decode(bloodList());
?>
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h3>Available Blood Stock</h3> 
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 ">
			<span>If you want to add/update your blood stock, then click here</span>
			<a class="btn btn-outline-primary" data-toggle="collapse" href="#stock_add" aria-expanded="false" aria-controls="stock_add">Add/Update</a>
		</div>
	</div><br>
	<div class="collapse" id="stock_add">
	  	<div class="row w3-bottombar w3-topbar w3-light-grey w3-padding-16">
		    <div class="col-md-4">
		    	<div class="form-group">
				    <label for="blood">Blood Group</label>
				    <select class="form-control" id="blood_id">
				      <?php
				      	for($i=0;$i<sizeof($blood->blood);$i++){
				      		echo '<option value="'.$blood->blood[$i]->blood_id.'">'.$blood->blood[$i]->blood.'</option>';
				      	}
				      ?>
				    </select>
				</div>
		    </div>
		    <div class="col-md-4">
				<div class="form-group">
				  <label for="volume">Volume</label>
				  <input type="tel" class="form-control stock" id="volume" placeholder="Enter volume in ml">
			    </div>
		    </div>
		    <div class="col-md-4">
		    	<br>
				<a class="btn btn-outline-primary" href="#" id="stock_add_btn">Add/Update</a>
		    </div>
	    </div>
	</div>
	<div class="row" id="stock_list"></div>
	<h3>Blood Request</h3>
	<p>Top 10 Blood request by the user. Contact them as soon as possible.</p>
	<div class="row" id="request_list"></div>
</div>
<?php require_once 'footer.php'; ?>


<script src="js/dashboard.js"></script>