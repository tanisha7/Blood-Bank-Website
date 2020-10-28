$("#user_login_btn").click(function(){
	$.post("api/user/profile/login.php",
	{
		username:$("#user_username").val(),
		password:$("#user_password").val()
	},function(data){
		console.log(data);
		var arr=JSON.parse(data);
		if(arr["status"]=="success"){
			$(".msg").html(show_alert(arr["remark"],"success"));
			window.location="index.php";
		}else{
			$(".msg").html(show_alert(arr["remark"],"warning"));
		
		}
	})
});