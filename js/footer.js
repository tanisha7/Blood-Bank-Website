function set_page_name(name){
  $("#page_name").html(' / '+name);
}

function show_alert(msg,classname){
  var out="";

  out+='<div class="alert alert-'+classname+' alert-dismissible fade show" role="alert">';
    out+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
      out+='<span aria-hidden="true">&times;</span>';
    out+='</button>';
    out+=msg;
  out+='</div>';

  return out;
}

$("body").on("click",".logout", function(){
  $.post("api/logout.php",
  {

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