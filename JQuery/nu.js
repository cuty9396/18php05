$('#name').html(localStorage.getItem("name"));
$('#fav').html(localStorage.getItem("fav"));
$('#birth').html(localStorage.getItem("birth"));
$('#gen').html("Nữ");
if(localStorage.getItem("birth")>=2000){
	$('#inf').css("background-color", "blue");
} else {
	$('#inf').css("background-color", "green");
}