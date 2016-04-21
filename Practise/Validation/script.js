function sub(){

	if(document.getElementById("t1").value == "")
	alert("Please enter your name");
	else if(document.getElementById("t2").value == "")
	alert("Please enter a password");
	else if(document.getElementById("t2").value != document.getElementById("t3").value)
	alert("Please enter correct password");
	else if(document.getElementById("t4").value == "")
	alert("Please enter your address");
	else
	alert("Form has been submitted");
}

//another function
	function see(){
	var c= confirm("Click OK to see Google Homepage or CANCEL to see Bing Homepage");
	if (c== true){
		window.location="http://www.google.co.in/";
	}
	else {
		window.location="http://www.bing.com/";
	}
	}


