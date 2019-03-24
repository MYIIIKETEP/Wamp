

var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
 
xhr.open('GET', 'data.json', false);
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {			
		var items = JSON.parse(xhr.responseText);
		var output = "";
		for (var key in items) {
			output += "<div id=items class=col-md-2>" + "<h3 id=Name>"+items[key].name + '</h3>' 
			+ '<p id=Gender>' + "Gender: " + items[key].gender + '</p>'+ "</div>";
		}
		
		document.getElementById('flip').innerHTML = output;
	}
}
xhr.send();

$(function(){
    $("#ClickMe").click(function(){
        $("#panel").slideToggle("fast");
    });
  });

  //Lægga till knappen "Add to Cart" på den ta this div #name och #gender och senare göra ett append
  //efter (.table thead) med tanke på att namn och pris i inlagda i thead, vi lääger bara in <th> + 
  //<td> objName </td> och <td>ObjGender</th> och sen vi kan ta hela <.table HTML kod och lägge in den på 
  //confirm sidan