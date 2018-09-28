var msec=0;
var sec=0;
var min=0;
function start(){
		document.getElementById("clock").value=min+":"+sec+":"+msec;
		go=setTimeout("start()",1);
		msec++;
		if(msec==100)
		{
			msec=0;
			sec++;
		}
		if(sec==60)
		{
			sec=0;
			min++;
		}
}

var check = 0;
var mer = 0;
var score = 0;
var current1 = 0;
var current2 = 0;
var current3 = 0;
var current4 = 0;
var current5 = 0;
var current6 = 0;
var current7 = 0;
var current8 = 0;
var current10 = 0;
var current20 = 0;
var current30 = 0;
var current40 = 0;
var current50 = 0;
var current60 = 0;
var current70 = 0;
var current80 = 0;


var delay = function(){
    if(condition){
        // run when condition is met
    }
    else {
        setTimeout(delay, 1500); 
    }
}

function switch_Image1(){
	current1 = 1;
	if (check == 0){
		mer = 1;
		document.images['image1'].src = current1 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current10 != 0){
			document.images['image1'].src = current1 + '.jpg';
			score++;
			check = 0;
			mer = 0;
		}
		else {
			document.images['image1'].src = current1 + '.jpg';
			//delay();
			current1=0;
			document.images['image1'].src = current1 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current1 + '.jpg';
			check = 0;
			mer = 0
		}
	}
}

function switch_Image2(){
	current2 = 2;
	if (check == 0){
		mer = 2;
		document.images['image2'].src = current2 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current20 != 0){
			document.images['image2'].src = current2 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image2'].src = current2 + '.jpg';
			//delay();
			current2=0;
			document.images['image2'].src = current2 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current2 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}
function switch_Image3(){
	current3 = 3;
	if (check == 0){
		mer = 3;
		document.images['image3'].src = current3 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current30 != 0){
			document.images['image3'].src = current3 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image3'].src = current3 + '.jpg';
			//delay();
			current3=0;
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current3 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image4(){
	current4 = 4;
	if (check == 0){
		mer = 4;
		document.images['image4'].src = current4 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current40 != 0){
			document.images['image4'].src = current4 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image4'].src = current4 + '.jpg';
			//delay();
			current4=0;
			document.images['image4'].src = current4 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current4 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}
function switch_Image5(){
	current5 = 5;
	if (check == 0){
		mer = 5;
		document.images['image5'].src = current5 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current50 != 0){
			document.images['image5'].src = current5 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image5'].src = current5 + '.jpg';
			//delay();
			current5=0;
			document.images['image5'].src = current5 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current5 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image6(){
	current6 = 6;
	if (check == 0){
		mer = 6;
		document.images['image6'].src = current6 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current60 != 0){
			document.images['image6'].src = current6 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image6'].src = current6 + '.jpg';
			//delay();
			current6=0;
			document.images['image6'].src = current6 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current6 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}
function switch_Image7(){
	current7 = 7;
	if (check == 0){
		mer = 7;
		document.images['image7'].src = current7 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current70 != 0){
			document.images['image7'].src = current7 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image7'].src = current7 + '.jpg';
			//delay();
			current7=0;
			document.images['image7'].src = current7 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current7 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}
function switch_Image8(){
	current8 = 8;
	if (check == 0){
		mer = 8;
		document.images['image8'].src = current8 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current80 != 0){
			document.images['image8'].src = current8 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image8'].src = current8 + '.jpg';
			//delay();
			current8=0;
			document.images['image8'].src = current8 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current8 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image10(){
	current10 = 10;
	if (check == 0){
		mer = 10;
		document.images['image10'].src = current10 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current1 != 0){
			document.images['image10'].src = current10 + '.jpg';
			score++;
			check = 0;
			mer = 0;
		}
		else {
			document.images['image10'].src = current10 + '.jpg';
			//delay();
			current10=0;
			document.images['image10'].src = current10 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current10 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}
function switch_Image20(){
	current20 = 20;
	if (check == 0){
		mer = 20;
		document.images['image20'].src = current20 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current2 != 0){
			document.images['image20'].src = current20 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image20'].src = current20 + '.jpg';
			//delay();
			current20=0;
			document.images['image20'].src = current20 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current20 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image30(){
	current30 = 30;
	if (check == 0){
		mer = 30;
		document.images['image30'].src = current30 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current3 != 0){
			document.images['image30'].src = current30 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image30'].src = current30 + '.jpg';
			//delay();
			current30=0;
			document.images['image30'].src = current30 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current30 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}	

function switch_Image40(){
	current40 = 40;
	if (check == 0){
		mer = 40;
		document.images['image40'].src = current40 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current4 != 0){
			document.images['image40'].src = current40 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image40'].src = current40 + '.jpg';
			//delay();
			current40=0;
			document.images['image40'].src = current40 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current40 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image50(){
	current50 = 50;
	if (check == 0){
		mer = 50;
		document.images['image50'].src = current50 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current5 != 0){
			document.images['image50'].src = current50 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image50'].src = current50 + '.jpg';
			//delay();
			current50=0;
			document.images['image50'].src = current50 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current50 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image60(){
	current60 = 60;
	if (check == 0){
		mer = 60;
		document.images['image60'].src = current60 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current6 != 0){
			document.images['image60'].src = current60 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image60'].src = current60 + '.jpg';
			//delay();
			current60=0;
			document.images['image60'].src = current60 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current60 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image70(){
	current70 = 70;
	if (check == 0){
		mer = 70;
		document.images['image70'].src = current70 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current7 != 0){
			document.images['image70'].src = current70 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image70'].src = current70 + '.jpg';
			//delay();
			current70=0;
			document.images['image70'].src = current70 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current70 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}

function switch_Image80(){
 	current80 = 80;
	if (check == 0){
		mer = 80;
		document.images['image80'].src = current80 + '.jpg';
		check++;
	}
	else if (check == 1) {
		if (current8 != 0){
			document.images['image80'].src = current80 + '.jpg';
			score++;
			check = 0;
			mer = 0; 
		}
		else {
			document.images['image80'].src = current80 + '.jpg';
			//delay();
			current80=0;
			document.images['image80'].src = current80 + '.jpg';
			var nameimg = 'image' + mer;
			document.images[nameimg].src = current80 + '.jpg';
			check = 0;
			mer = 0;
		}
	}
}
