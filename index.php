<?php require_once 'header.php';
$blood=json_decode(bloodList());
?>

<div class="container">
		<div class="row w3-padding-24">
			<div class="col-md-4">
				<div class="form-group">
				    <label for="volume">Volume</label>
				    <select class="form-control" id="volume">
				      <option value="" selected>Select blood volume</option>
						<?php
							for($i=50;$i<=1000;$i+=50){
								echo '<option value="'.$i.'">'.$i.' ml</option>';
							}
						?>
				    </select>
				</div>
			</div>
			<div class="col-md-4" >
				<div class="form-group">
				    <label for="blood" >Blood Group</label>
				    <select class="form-control" id="blood">
				    	<option value="" selected>Select blood group</option>
						<?php
							for($i=0;$i<sizeof($blood->blood);$i++){
								echo '<option value="'.$blood->blood[$i]->blood_id.'">'.$blood->blood[$i]->blood.'</option>';
							}
						?>
				    </select>
				</div>
			</div>
			<div class="col-md-4" >
				<label>Hospital Name</label>
				<div class="form-inline my-2 my-lg-0">
			      	<input class="form-control mr-sm-2" type="text" placeholder="Hospital name" autocomplete="off" id="search">
			    </div>
			</div>
			<br>
			<br>
			<button class="btn btn-outline-danger my-2 my-sm-0" type="submit" style="margin-left:440px;" id="search_btn">Search</button>
		</div>
	<div class="row" id="stock_list"></div>
</div>

<?php require_once 'footer.php'; ?>

<script src="js/index.js"></script>