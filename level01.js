// Create new Level prototypes like this to add a level with gameobjects. level01 is the first level.
Level.prototype.level01 = function(){

	// Window Options
	Display.bgColor = "#083366";

	// Spawn Player
	GameObject.spawn("Mario", Display.width / 2, Display.height / 2, -3);

	// Spawn UI
	GameObject.spawn("Text", Display.width - 40, 50, -4, "coinsUI");
	gameObjectArray[GameObject.getID("coinsUI")].textAlign = "right";
	gameObjectArray[GameObject.getID("coinsUI")].text = "0 COINS";

	// Game Over Text
	GameObject.spawn("Text", Display.width / 2, Display.height / 2, -4, "gameover");
	gameObjectArray[GameObject.getID("gameover")].textAlign = "center";
	gameObjectArray[GameObject.getID("gameover")].text = "GAME OVER";
	gameObjectArray[GameObject.getID("gameover")].visible = false;

	// New High Score Text
	GameObject.spawn("Text", Display.width / 2, Display.height / 2 - 180, -4, "textnewhighscore");
	gameObjectArray[GameObject.getID("textnewhighscore")].textAlign = "center";
	gameObjectArray[GameObject.getID("textnewhighscore")].text = "NEW HIGH SCORE!";
	gameObjectArray[GameObject.getID("textnewhighscore")].visible = false;
	gameObjectArray[GameObject.getID("textnewhighscore")].color = "#00CCFF";

	// Player Username Text
	GameObject.spawn("Text", Display.width / 2, Display.height / 2 - 140, -4, "textplayer");
	gameObjectArray[GameObject.getID("textplayer")].textAlign = "center";
	gameObjectArray[GameObject.getID("textplayer")].text = "PLAYER";
	gameObjectArray[GameObject.getID("textplayer")].visible = false;

	// High Score Text
	GameObject.spawn("Text", Display.width / 2, Display.height / 2 - 100, -4, "texthighscore");
	gameObjectArray[GameObject.getID("texthighscore")].textAlign = "center";
	gameObjectArray[GameObject.getID("texthighscore")].text = "0 COINS";
	gameObjectArray[GameObject.getID("texthighscore")].visible = false;

	// Leaderboards
	GameObject.spawn("Text", Display.width / 2, Display.height / 2 + 100, -4, "textLeaderboard");
	gameObjectArray[GameObject.getID("textLeaderboard")].textAlign = "center";
	gameObjectArray[GameObject.getID("textLeaderboard")].text = "LEADERBOARD";
	gameObjectArray[GameObject.getID("textLeaderboard")].visible = false;

	GameObject.spawn("Text", Display.width / 2 - 250, Display.height / 2 + 140, -4, "textLeaderboard01");
	gameObjectArray[GameObject.getID("textLeaderboard01")].textAlign = "left";
	gameObjectArray[GameObject.getID("textLeaderboard01")].text = "PLAYER";
	gameObjectArray[GameObject.getID("textLeaderboard01")].visible = false;
	gameObjectArray[GameObject.getID("textLeaderboard01")].color = "#ffb458";
	GameObject.spawn("Text", Display.width / 2 + 250, Display.height / 2 + 140, -4, "textLeaderboard01score");
	gameObjectArray[GameObject.getID("textLeaderboard01score")].textAlign = "right";
	gameObjectArray[GameObject.getID("textLeaderboard01score")].text = "000000";
	gameObjectArray[GameObject.getID("textLeaderboard01score")].visible = false;
	gameObjectArray[GameObject.getID("textLeaderboard01score")].color = "#ffb458";

	GameObject.spawn("Text", Display.width / 2 - 250, Display.height / 2 + 180, -4, "textLeaderboard02");
	gameObjectArray[GameObject.getID("textLeaderboard02")].textAlign = "left";
	gameObjectArray[GameObject.getID("textLeaderboard02")].text = "PLAYER";
	gameObjectArray[GameObject.getID("textLeaderboard02")].visible = false;
	GameObject.spawn("Text", Display.width / 2 + 250, Display.height / 2 + 180, -4, "textLeaderboard02score");
	gameObjectArray[GameObject.getID("textLeaderboard02score")].textAlign = "right";
	gameObjectArray[GameObject.getID("textLeaderboard02score")].text = "000000";
	gameObjectArray[GameObject.getID("textLeaderboard02score")].visible = false;

	GameObject.spawn("Text", Display.width / 2 - 250, Display.height / 2 + 220, -4, "textLeaderboard03");
	gameObjectArray[GameObject.getID("textLeaderboard03")].textAlign = "left";
	gameObjectArray[GameObject.getID("textLeaderboard03")].text = "PLAYER";
	gameObjectArray[GameObject.getID("textLeaderboard03")].visible = false;
	GameObject.spawn("Text", Display.width / 2 + 250, Display.height / 2 + 220, -4, "textLeaderboard03score");
	gameObjectArray[GameObject.getID("textLeaderboard03score")].textAlign = "right";
	gameObjectArray[GameObject.getID("textLeaderboard03score")].text = "000000";
	gameObjectArray[GameObject.getID("textLeaderboard03score")].visible = false;

	GameObject.spawn("Text", Display.width / 2 - 250, Display.height / 2 + 260, -4, "textLeaderboard04");
	gameObjectArray[GameObject.getID("textLeaderboard04")].textAlign = "left";
	gameObjectArray[GameObject.getID("textLeaderboard04")].text = "PLAYER";
	gameObjectArray[GameObject.getID("textLeaderboard04")].visible = false;
	GameObject.spawn("Text", Display.width / 2 + 250, Display.height / 2 + 260, -4, "textLeaderboard04score");
	gameObjectArray[GameObject.getID("textLeaderboard04score")].textAlign = "right";
	gameObjectArray[GameObject.getID("textLeaderboard04score")].text = "000000";
	gameObjectArray[GameObject.getID("textLeaderboard04score")].visible = false;

	GameObject.spawn("Text", Display.width / 2 - 250, Display.height / 2 + 300, -4, "textLeaderboard05");
	gameObjectArray[GameObject.getID("textLeaderboard05")].textAlign = "left";
	gameObjectArray[GameObject.getID("textLeaderboard05")].text = "PLAYER";
	gameObjectArray[GameObject.getID("textLeaderboard05")].visible = false;
	GameObject.spawn("Text", Display.width / 2 + 250, Display.height / 2 + 300, -4, "textLeaderboard05score");
	gameObjectArray[GameObject.getID("textLeaderboard05score")].textAlign = "right";
	gameObjectArray[GameObject.getID("textLeaderboard05score")].text = "000000";
	gameObjectArray[GameObject.getID("textLeaderboard05score")].visible = false;

	// Spawn Objects
	randomStarSpawner();

	GameObject.spawn("AngrySun",0,0,0);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);
	GameObject.spawn("Coin",0,0,1);

	// Play BG Music
	Level.backgroundMusic.src = ("sounds/mario_athletic.mp3");
	Level.backgroundMusic.loop = true;
	Level.backgroundMusic.play();

	this.gameOver = function(){

	}

}