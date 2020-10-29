$("document").ready(function(){
	$("#tab_home").addClass("active");
	print_data();
})

$("#blood").change(function(){
	print_data();
});

$("#volume").change(function(){
	print_data();
});

$("#search").keyup(function(){
	print_data();
})

function print_data(){
	var blood_id=$("#blood").val();
	var volume=$("#volume").val();
	var search=$("#search").val();
	$.post("api/user/stock/stock_list.php",
	{
		blood_id:blood_id,
		volume:volume,
		search:search,
		limit:50
	},function(data){
		console.log(data);
		var out="";
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			for(i=0;i<arr["stock"].length;i++){
				out+='<div class="col-md-3">';
					out+='<div class="card pr-2 pl-2" style="width:16rem;">'
						out+='<div class="card-body w3-teal text-center>';
						out+='<h4 class="card-title">'+arr["stock"][i]["hospital_name"]+' <span class="badge badge-danger">'+arr["stock"][i]["blood"]+'</span></h4>';
						out+='<p class="card-text">Available '+arr["stock"][i]["volume"]+' ml</p>';
						out+='<a href="#" class="btn btn-outline-warning request_blood_btn " data-hospital_id="'+arr["stock"][i]["hospital_id"]+'" data-blood_id="'+arr["stock"][i]["blood_id"]+'">Request blood</a>';
						out+='</div>';
					out+='</div>';
				out+='</div>';
			}
		}else{
			out+='<center><p class="text-danger">'+arr["remark"]+'</p></center>';
		}
		$("#stock_list").html(out);
		request_btn();
	});
}

function request_btn(){
	$.post("api/check_login.php","",function(data){
		console.log(data);
		var arr=JSON.parse(data);
		if(arr["type"]=="hospital"){
			//hopital is login, then disabled this option
			$(".request_blood_btn").addClass("disabled");
		}else if(arr["type"]=="user"){
			// user is login, nothing to do
		}else{
			// no one is login, so enable request btn, and link to login btn
			$(".request_blood_btn").prop("href","login.php");
		}
	});
}
$("body").on("click",".request_blood_btn",function(){
	var hospital_id=$(this).data("hospital_id");
	var blood_id=$(this).data("blood_id");
	var volume=$("#volume").val();

	console.log({hospital_id,blood_id});
	$.post("api/user/request/request_add.php",
	{
		hospital_id:hospital_id,
		blood_id:blood_id,
		volume:volume
	},function(data){
		console.log(data);
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			$(".msg").html(show_alert(arr["remark"],"success"));
			print_data();
		}else{
			$(".msg").html(show_alert(arr["remark"],"warning"));
		}
	});
});
