var sp1 = 0;
var sp2 = 0;
var sp3 = 0;
var sp4 = 0;
var sp5 = 0;
$("#btn1").click(function() {
	sp1 ++;
	localStorage.setItem("product1", sp1);
});

$("#btn2").click(function() {
	sp2 ++;
	localStorage.setItem("product2", sp2);
});

$("#btn3").click(function() {
	sp3 ++;
	localStorage.setItem("product3", sp3);
});

$("#btn4").click(function() {
	sp4 ++;
	localStorage.setItem("product4", sp4);
});

$("#btn5").click(function() {
	sp5 ++;
	localStorage.setItem("product5", sp5);
});

$(".button").click(function() {
	window.location.assign("GioHang.html");
});