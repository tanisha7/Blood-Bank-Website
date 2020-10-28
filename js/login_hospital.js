
$("#hospital_login_btn").click(function(){
	$.post("api/hospital/profile/login.php",
	{
		username:$("#hospital_username").val(),
		password:$("#hospital_password").val()
	},function(data){
		console.log(data);
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			$(".msg").html(show_alert(arr["remark"],"success"));
			window.location="dashboard.php";
		}else{
			$(".msg").html(show_alert(arr["remark"],"warning"));
		}
	})
});
