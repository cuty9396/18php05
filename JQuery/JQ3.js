var year = 1900;
var dNow = new Date();
var yNow = dNow.getFullYear();
var options = "";
for(var y=year; y<=yNow; y++){
  options += "<option>"+ y +"</option>";
}
document.getElementById("input2").innerHTML = options;


$('#confirm').click(function(){
	for(var i = 1 ; i <= 5 ; i++){
		if($('#input' + i).val() == ""){
			$('#alert' + i).html("Không được để trống!");
		}
		else{
			$('#alert' + i).html("");
		}
	}
	localStorage.setItem("name", $('#input1').val());
	localStorage.setItem("birth", $('#input2').val());
	localStorage.setItem("fav", $('#input5').val());

	if(!$('#radio1').is(':checked') && !$('#radio2').is(':checked')){
		$('#alert3').html("Không được để trống!");
	}
	if ($('#radio1').is(':checked') && $('#input1').val() != "" && $('#input5').val() != "") {
		window.location.assign("nam.html");
	}
	if ($('#radio2').is(':checked') && $('#input1').val() != "" && $('#input5').val() != "") {
		window.location.assign("nu.html");

	}


});

