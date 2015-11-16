var request = new XMLHttpRequest();
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=16602,us&APPID=DC8AC525FF70BC98E31571A84B1E5AE4&units=imperial", true);

request.onload = function() {
	var responseJSONData = JSON.parse(request.responseText);
	var temp = responseJSONData.main.temp;
	var sunrise = new Date(responseJSONData.sys.sunrise*1000);
	var sunset = new Date(responseJSONData.sys.sunset*1000);
	
	//add temperature to the document
	document.getElementById("temp").innerHTML = temp + "&deg; F";
	
	//add icon to the document
	document.getElementById("icon").innerHTML = "<img src=http://openweathermap.org/img/w/" + responseJSONData.weather[0].icon + ".png />";
	
	//add solid color to the document
	if(temp < 32)
	{
		document.getElementById("fill").style.background = "blue";
	}
	else if(temp < 50)
	{
		document.getElementById("fill").style.background = "cyan";
	}
	else if(temp < 70)
	{
		document.getElementById("fill").style.background = "yellow";
	}
	else if(temp < 90)
	{
		document.getElementById("fill").style.background = "red";
	}
	else
	{
		document.getElementById("fill").style.background = "black";
	}
	
	//add city to the document
	document.getElementById("city").innerHTML = responseJSONData.name;
	
	//add description of weather to the document
	document.getElementById("desc").innerHTML = responseJSONData.weather[0].description;
	
	//add sunrise time to the document
	document.getElementById("sunrise").innerHTML += sunrise.getHours() + ":" + sunrise.getMinutes();
	
	//add sunset time to the document
	document.getElementById("sunset").innerHTML += sunset.getHours() + ":" + sunset.getMinutes();
	
}

request.onerror = function() {
	console.log("Connection Error");
}

request.send();