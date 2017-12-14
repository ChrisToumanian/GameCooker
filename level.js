function Level(){

	bgColor = "#FFFFFF";

	// Performance Info
	if (Game.diagnostics){
		GameObject.spawn("Diagnostics", 170, 50, -4, "0 FPS");
	}

}

// Default Variables
Level.backgroundMusic = new Audio;
Level.status = "running";
Level.next = "levelClear";

// Load
Level.load = function(newLevel){
	gameObjectArray = [];
	level = [];
	level = new Level()[newLevel]();
}

// Pause
Level.pause = function(status){
	if (Level.status == "gameover"){
		Level.status = "running";
		Level.load(Level.next);
		togglePause();
	} else if (Game.time != 0){
		Game.time = 0;
		togglePause();
	} else {
		Game.time = 1;
		togglePause();
	}
}

// Game Over
Level.gameOver = function(level){
	GameObject.spawn("Leaderboard",0,0,0);
	Input.clear();
	Level.next = level;
	Level.status = "gameover";
	Game.time = 0;
	togglePause();
}

// Border Parameters
Level.border = {};
Level.border.top = 0;
Level.border.bottom = Display.height;
Level.border.left = 0;
Level.border.right = Display.width;

Level.prototype.levelClear = function(){

	// Window Options
	Display.bgColor = "#000000";

}