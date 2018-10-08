if (localStorage.getItem("product1")>0){
	var table = document.getElementById("myTable");
	var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var img = document.createElement("img");
    img.src = "icon1.jpg";
    cell1.appendChild(img);
    cell2.innerHTML = "Apple iPhone X1 256GB";
    cell3.innerHTML = "20.999.999";
    cell4.innerHTML = "";
}