$("#username").blur(function(){
	var username=$("#username").val();
	$.post("api/user/profile/check_username.php",
	{
		username:username
	},function(data){
		// console.log(data);
		$("#check_user").removeClass();
		if(data==true){
			$("#check_user").text(" ( Available )");
			$("#check_user").addClass("text-success");
		}else{
			$("#check_user").text(" ( Not Available )");
			$("#check_user").addClass("text-danger");
		}
	});
});

$("#register").click(function(){
	$.post("api/user/profile/register.php",
	{
		username:$("#username").val(),
		first_name:$("#first_name").val(),
		last_name:$("#last_name").val(),
		password:$("#password").val(),
		mobile:$("#mobile").val(),
		blood_id:$("#blood").val()
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