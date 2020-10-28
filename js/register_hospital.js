
$("#username").blur(function(){
	var username=$("#username").val();
	$.post("api/hospital/profile/check_username.php",
	{
		username:username
	},function(data){
		// console.log(data);
		$("#check_hospital").removeClass();
		if(data==true){
			$("#check_hospital").text(" ( Available )");
			$("#check_hospital").addClass("text-success");
		}else{
			$("#check_hospital").text(" ( Not Available )");
			$("#check_hospital").addClass("text-danger");
		}
	});
});

$("#register").click(function(){
	$.post("api/hospital/profile/register.php",
	{
		username:$("#username").val(),
		hospital_name:$("#hospital_name").val(),
		password:$("#password").val(),
		mobile:$("#mobile").val()
	},function(data){
		console.log(data);
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			$(".msg").html(show_alert(arr["remark"],"success"));
		}else{
			$(".msg").html(show_alert(arr["remark"],"warning"));
		}
	})
});