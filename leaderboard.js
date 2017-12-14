// GameObject Text
GameObject.prototype.Leaderboard = function(){

    this.visible = false;
	this.color = "white";

    // Display Leaderboard
    if (Player.username == ""){
		Player.promptUsername();
	}

	if (Player.score > Player.highScore){
		Player.highScore = Player.score;
		if (Game.network.enabled){
			Player.saveHighScore();
			gameObjectArray[GameObject.getID("textnewhighscore")].visible = true;
			gameObjectArray[GameObject.getID("textplayer")].visible = true;
			gameObjectArray[GameObject.getID("textplayer")].text = Player.username;
			gameObjectArray[GameObject.getID("texthighscore")].visible = true;
			gameObjectArray[GameObject.getID("texthighscore")].text = Player.highScore + " COINS";
		} else {
			gameObjectArray[GameObject.getID("textnewhighscore")].visible = true;
			gameObjectArray[GameObject.getID("textnewhighscore")].text = "HIGH SCORE"
			gameObjectArray[GameObject.getID("textplayer")].visible = true;
			gameObjectArray[GameObject.getID("textplayer")].text = Player.username;
			gameObjectArray[GameObject.getID("texthighscore")].visible = true;
			gameObjectArray[GameObject.getID("texthighscore")].text = Player.highScore + " COINS";
		}
	} else {
		gameObjectArray[GameObject.getID("textnewhighscore")].visible = true;
		gameObjectArray[GameObject.getID("textnewhighscore")].text = "HIGH SCORE"
		gameObjectArray[GameObject.getID("textplayer")].visible = true;
		gameObjectArray[GameObject.getID("textplayer")].text = Player.username;
		gameObjectArray[GameObject.getID("texthighscore")].visible = true;
		gameObjectArray[GameObject.getID("texthighscore")].text = Player.highScore + " COINS";
	}

	if (Game.network.enabled){
		Player.getLeaderboard();
    }
		gameObjectArray[GameObject.getID("textLeaderboard")].visible = true;

		gameObjectArray[GameObject.getID("textLeaderboard01")].text = Player.leader[1].username;
		gameObjectArray[GameObject.getID("textLeaderboard01")].visible = true;
		gameObjectArray[GameObject.getID("textLeaderboard01score")].text = Player.leader[1].highScore;
		gameObjectArray[GameObject.getID("textLeaderboard01score")].visible = true;

		gameObjectArray[GameObject.getID("textLeaderboard02")].text = Player.leader[2].username;
		gameObjectArray[GameObject.getID("textLeaderboard02")].visible = true;
    	gameObjectArray[GameObject.getID("textLeaderboard02score")].text = Player.leader[2].highScore;
		gameObjectArray[GameObject.getID("textLeaderboard02score")].visible = true;

		gameObjectArray[GameObject.getID("textLeaderboard03")].text = Player.leader[3].username;
		gameObjectArray[GameObject.getID("textLeaderboard03")].visible = true;
		gameObjectArray[GameObject.getID("textLeaderboard03score")].text = Player.leader[3].highScore;
		gameObjectArray[GameObject.getID("textLeaderboard03score")].visible = true;

		gameObjectArray[GameObject.getID("textLeaderboard04")].text = Player.leader[4].username ;
		gameObjectArray[GameObject.getID("textLeaderboard04")].visible = true;
		gameObjectArray[GameObject.getID("textLeaderboard04score")].text = Player.leader[4].highScore;
		gameObjectArray[GameObject.getID("textLeaderboard04score")].visible = true;

		gameObjectArray[GameObject.getID("textLeaderboard05")].text = Player.leader[5].username;
		gameObjectArray[GameObject.getID("textLeaderboard05")].visible = true;
		gameObjectArray[GameObject.getID("textLeaderboard05score")].text = Player.leader[5].highScore;
		gameObjectArray[GameObject.getID("textLeaderboard05score")].visible = true;

}