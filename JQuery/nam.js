$('#name').html(localStorage.getItem("name"));
$('#fav').html(localStorage.getItem("fav"));
$('#birth').html(localStorage.getItem("birth"));
$('#gen').html("Nam");
if(localStorage.getItem("birth")>=2000){
	$('#inf').css("background-color", "blue");
} else {
	$('#inf').css("background-color", "green");
}