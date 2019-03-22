

var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
 
xhr.open('GET', 'data.json', false);
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {			
		var items = JSON.parse(xhr.responseText);
		var output = "";
		for (var key in items) {
			output += "<div id=items class=col-md-2>" + "<h3>"+items[key].name + '</h3>' 
			+ '<p>' + "Gender: " + items[key].gender + '</p>'+ "</div>";
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