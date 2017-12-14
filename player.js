// Player
function Player(){

	// Online Leaderboard Fetches
	if (Game.network.enabled){
		Player.getIP();
		Player.getLeaderboard();
		Player.getHighScore(Player.IP);
	}

}

// Player Variables
Player.ID = 1;
Player.username = "";
Player.IP = "";
Player.score = 0;
Player.highScore = 0;

// Leader Variables
Player.leader = [];
Player.leader[1] = [];
Player.leader[1].username = "";
Player.leader[1].highScore = 0;
Player.leader[2] = [];
Player.leader[2].username = "";
Player.leader[2].highScore = 0;
Player.leader[3] = [];
Player.leader[3].username = "";
Player.leader[3].highScore = 0;
Player.leader[4] = [];
Player.leader[4].username = "";
Player.leader[4].highScore = 0;
Player.leader[5] = [];
Player.leader[5].username = "";
Player.leader[5].highScore = 0;

// Get IP Address
Player.getIP = function(){

	if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://jsonip.com/?callback=?",false);
    xmlhttp.send();

    response = xmlhttp.responseText;
	response = response.replace('?({"ip":"', '');
	response = response.replace('","about":"/about","Pro!":"http://getjsonip.com"})', '');
	Player.IP = response;

    return false;

}

// Load High Score
Player.getHighScore = function(ip){

	if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.open("GET", "http://www.massivedamage.net/engine/users.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;

	var x = xmlDoc.getElementsByTagName("USER");

	for (i = 0; i < x.length; i++){
		if (Player.IP == x[i].getElementsByTagName("IPADDRESS")[0].childNodes[0].nodeValue){
			Player.username = x[i].getElementsByTagName("USERNAME")[0].childNodes[0].nodeValue;
			Player.highScore = x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue;
		}
	}

}

// Load Leaderboard
Player.getLeaderboard = function(){

	if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.open("GET", "http://www.massivedamage.net/engine/users.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;

	var x = xmlDoc.getElementsByTagName("USER");

	// Determine Leader 1
	for (i = 0; i < x.length; i++){
		if (parseInt(Player.leader[1].highScore) < parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue)){
			Player.leader[1].highScore = x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue;
			Player.leader[1].username = x[i].getElementsByTagName("USERNAME")[0].childNodes[0].nodeValue;
		}
	}

	// Determine Leader 2
	for (i = 0; i < x.length; i++){
		if (parseInt(Player.leader[2].highScore) < parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue) 
				&& parseInt(Player.leader[1].highScore) > parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue)){
			Player.leader[2].highScore = x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue;
			Player.leader[2].username = x[i].getElementsByTagName("USERNAME")[0].childNodes[0].nodeValue;
		}
	}

	// Determine Leader 3
	for (i = 0; i < x.length; i++){
		if (parseInt(Player.leader[3].highScore) < parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue) 
				&& parseInt(Player.leader[2].highScore) > parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue)){
			Player.leader[3].highScore = x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue;
			Player.leader[3].username = x[i].getElementsByTagName("USERNAME")[0].childNodes[0].nodeValue;
		}
	}

	// Determine Leader 4
	for (i = 0; i < x.length; i++){
		if (parseInt(Player.leader[4].highScore) < parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue) 
				&& parseInt(Player.leader[3].highScore) > parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue)){
			Player.leader[4].highScore = x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue;
			Player.leader[4].username = x[i].getElementsByTagName("USERNAME")[0].childNodes[0].nodeValue;
		}
	}

	// Determine Leader 5
	for (i = 0; i < x.length; i++){
		if (parseInt(Player.leader[5].highScore) < parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue) 
				&& parseInt(Player.leader[4].highScore) > parseInt(x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue)){
			Player.leader[5].highScore = x[i].getElementsByTagName("HIGHSCORE")[0].childNodes[0].nodeValue;
			Player.leader[5].username = x[i].getElementsByTagName("USERNAME")[0].childNodes[0].nodeValue;
		}
	}

}

// Save High Score
Player.saveHighScore = function(){

	if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	//var XMLHttp = getXMLHttp();
	xmlhttp.open("POST", "http://www.massivedamage.net/engine/leaderboard.php");
	xmlhttp.onreadystatechange = handlerFunction;
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	var playerInfo = "username=" + Player.username + "&ipaddress=" + Player.IP + "&highscore=" + Player.highScore;
	xmlhttp.send(String(playerInfo));

	function handlerFunction() {
		if (xmlhttp.readyState == 4) {
			//window.alert("Returned data: " + xmlhttp.responseText);
		}
	}

}

// Ask for username
Player.promptUsername = function(){
	var newUsername = prompt("New high score! Please enter your username.");
	Player.username = newUsername;
}