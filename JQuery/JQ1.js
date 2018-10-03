$('#demo').click(function(){
	alert('Hello ID');
});

$('.demo1').click(function(){
	alert('Hello class');
});

$('h2').click(function(){
	alert('Hello type');
});

$('h1').click(function(){
	$('h1').html("Hello 4");
});

$('#on').click(function(){
	$('#anh').attr("src", "on.png");
});

$('#off').click(function(){
	$('#anh').attr("src", "off.png");
});

$('#roses').click(function(){
	$('#roses').css({"color":"blue", "font-size":"50px"});
});

$('#hide').click(function(){
	$('#anh2').hide();
});

$('#show').click(function(){
	$('#anh2').show();
});

function sumNumber(a , b){
	return parseInt(a) + parseInt(b);
}
$('#somot').keyup(function(){
	var a = $('#somot').val();
	var b = $('#sohai').val();
    $('#ketqua').html(sumNumber(a, b));
});

$('#sohai').keyup(function(){
	var a = $('#somot').val();
	var b = $('#sohai').val();
    $('#ketqua').html(sumNumber(a, b));
});

$('#somot').focus(function(){
	$('#somot').val(0);
});

$('#sohai').focus(function(){
	$('#sohai').val(0);
});