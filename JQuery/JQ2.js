$('#nut').click(function(){
	var a = $('#input2').val();
	var b = $('#input3').val();
	var c = 0;
	for(var i = 1 ; i <= 5 ; i++){
		if($('#input' + i).val() == ""){
			$('#thongbao' + i).html("Không được để trống");
		}
		else{
			$('#thongbao' + i).html("");
		}
	}

	if(b > a){
		$('#thongbao3').html("Số trẻ em không được lớn hơn số người lớn");
	}

	var startDate = new Date($('#input4').val());
	var endDate = new Date($('#input5').val());

  	if (startDate > endDate) {
    	$('#thongbao5').html("Ngày kết thúc phải sau ngày bắt đầu");
  	} 

  	var dNow = new Date();

  	if ((startDate < dNow) && (startDate != "") )  {
  		$('#thongbao4').html("Ngày bắt đầu đã qua");
  	}

/*
  	if(c==0){
  		alert("Đăng ký thành công");
  	}
*/
});