$("document").ready(function(){
	$("#tab_dashboard").addClass("active");
	print_data();
});

function print_data(){
	print_stock();
	print_request();
}

function print_stock(){
	$.post("api/hospital/stock/stock_list.php",
	{

	},function(data){
		console.log(data);
		var out="";
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			for(i=0;i<arr["stock"].length;i++){
				out+='<div class="col-md-2 w3-padding-10">';
					out+='<div class="card rounded-circle"  style="background-color:#f56a79">';
						out+='<div class="card-block">';
						out+='<h2 class="card-title text-center">'+arr["stock"][i]["blood"]+'</h2>';
						out+='<h5 class="card-subtitle text-center mb-2 text-muted"><span class="badge badge-dark">'+arr["stock"][i]["volume"]+' ml</span></h5>';
						//out+='<p class="card-text">'+arr["stock"][i]["detail"]+'</p>';
						out+='</div>';
					out+='</div>';
				out+='</div>';
			}
		}else{
			out+='<center><p class="text-danger">'+arr["remark"]+'</p></center>';
		}
		$("#stock_list").html(out);
	})
}

$('.stock').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#stock_add_btn').click();//Trigger search button click event
    }
});

$("#stock_add_btn").click(function(){
	$.post("api/hospital/stock/stock_add.php",
	{
		blood_id:$("#blood_id").val(),
		volume:$("#volume").val()
	},function(data){
		console.log(data);
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			$(".msg").html(show_alert(arr["remark"],"success"));
			print_stock();
		}else{
			$(".msg").html(show_alert(arr["remark"],"warning"));
		}
	})
});

function print_request(){
	$.post("api/hospital/request/request_list.php",
	{
		limit:20
	},function(data){
		console.log(data);
		var out="";
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			for(i=0;i<arr["request"].length;i++){
				out+='<div class="col-md-3">';
				out+='<div class="card pr-2 pl-2" style="width: 20rem;">'
					out+='<div class="card-body w3-pale-green text-center>';
						out+='<h4 class="card-title"><b>'+arr["request"][i]["first_name"]+' '+arr["request"][i]["last_name"]+'</b></h4>';
							out+='<p class="card-text">Urgent requirement of<br> '+arr["request"][i]["volume"]+' ml, '+arr["request"][i]["blood"]+' blood.<br> Please Contact me.</p>';
							out+='<p class="card-text w3-small w3-text-grey">'+arr["request"][i]["datetime"]+'</p>';
							out+='<button class="btn btn-outline-success">'+arr["request"][i]["user_mobile"]+'</button>';
						out+='</div>';
					out+='</div>';
	
				out+='</div>';
			}
		}else{
			out+='<center><p class="text-danger">'+arr["remark"]+'</p></center>';
		}
		$("#request_list").html(out);
	})
}