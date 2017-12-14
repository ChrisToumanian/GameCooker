/* ====================================================
   Author:  Chris Toumanian

   TABLE OF CONTENTS
   1. Global Variables
   2. Game Initialization
   3. Update Loop
   4. Canvas Drawing

======================================================= */

/****************************************
         2. GLOBAL VARIABLES
****************************************/

// Network & Online Options
Game = [];
Game.network = [];
Game.network.enabled = false;
Game.difficulty = "normal";
Game.diagnostics = false;
Game.time = 1;

// Display Options
Display = [];
Display.width = window.innerWidth;
Display.height = window.innerHeight;
Display.bgColor = "#000000";
Display.FPS = 60;
Display.maxFPS = 60;

// Game Canvas
var depthLayers = 5;
var paused = false;
var pauseTimer = 0;

// Frames Per Second
var maxFPS = 60;
var lastFrameTimeMs = 0;
var framesThisSecond = 0;
var lastFpsUpdate = 0
var delta = 0;
var timestep = 1000 / 60;
var animationFPS = 8;
var animationTick = 0;

// Request Animation Frame
var animationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null ;

/****************************************
         2. GAME INITIALIZATION
****************************************/

// Initialize
function Main(){

	// Create Player
	var player01 = new Player();

	// Set Video
    GameCanvas.width = Display.width;
    GameCanvas.height = Display.height;
	drawBackgroundColor();
	animationFrame(GameLoop);
	var canvas = GameCanvas.getContext('2d');
	canvas.imageSmoothingEnabled = false;

	// Load Level01
	var level = new Level()["level01"]();

}

/****************************************
         3. GAME LOOP
****************************************/

// Game Loop
function GameLoop(timestamp){
	
	// Check FPS timing
	if (timestamp < lastFrameTimeMs + (1000 / Display.maxFPS)){
		animationFrame(GameLoop);
		return;
	}
	
	delta += timestamp - lastFrameTimeMs;
	lastFrameTimeMs = timestamp;
	
	if (timestamp > lastFpsUpdate + 1000){
		Display.FPS = 0.25 * framesThisSecond + 0.75 * Display.FPS;
		lastFpsUpdate = timestamp;
		framesThisSecond = 0;
	}
	
	framesThisSecond++;
	var numUpdateSteps = 0;
	
	while (delta >= timestep){
		delta -= timestep;
		if (++numUpdateSteps >= 240){
			break;
		}
	}
	
	// Animation Tick
	animationTick += 1;
	if (animationTick == animationFPS){
		animationTick = 0;
	}

	// Pause Controls
	Input.checkKeys();
	if (Input.keyDown("13")){Level.pause();}
	if (pauseTimer > 0){pauseTimer -=1;}

	// Update frame
	if (!paused){
		update();
		draw();
	}

	animationFrame(GameLoop);

}

// Update
function update(){

	// Update GameObjects
	for (var i = 0; i < gameObjectArray.length; i++){
		if (gameObjectArray[i] != null){	
				gameObjectArray[i].update();
		}
	}

}

/****************************************
         4. CANVAS DRAWING
****************************************/

// Draw GameObjects
function draw(){

	// Draw BG Color & Clear Frame
	drawBackgroundColor();

	// Sort GameObjects
	for (var l = -depthLayers; l < depthLayers; l++){
		for (var i = 0; i < gameObjectArray.length; i++){
			if (gameObjectArray[i] != null && gameObjectArray[i].position.z == -l && gameObjectArray[i].visible == true){
				drawToCanvas(i);
			}
		}
	}

}

// Draws to Canvas
function drawToCanvas(i){

	var canvas = GameCanvas.getContext('2d');
	if (gameObjectArray[i].image != null){
		canvas.drawImage(gameObjectArray[i].image, gameObjectArray[i].position.x - gameObjectArray[i].width / 2, gameObjectArray[i].position.y - gameObjectArray[i].height / 2, gameObjectArray[i].width, gameObjectArray[i].height);
	} else if (gameObjectArray[i].text != null){
        canvas.font = gameObjectArray[i].fontSize + "px " + gameObjectArray[i].font;
		canvas.textAlign = gameObjectArray[i].textAlign;
		canvas.fillStyle = gameObjectArray[i].color;
        canvas.fillText(gameObjectArray[i].text, gameObjectArray[i].position.x, gameObjectArray[i].position.y);
	} else {
		canvas.fillStyle = gameObjectArray[i].color;
		canvas.fillRect(gameObjectArray[i].position.x, gameObjectArray[i].position.y, gameObjectArray[i].width, gameObjectArray[i].height);
	}

}

// Draws Canvas Background Color
function drawBackgroundColor(){
	var canvas = GameCanvas.getContext('2d');
	canvas.fillStyle = Display.bgColor;
	canvas.fillRect(0, 0, GameCanvas.width, GameCanvas.height);
}

// Toggle Pause
function togglePause(){
	if (pauseTimer == 0){
		if (!paused){
			paused = true;
			pauseTimer = 20;
			Level.backgroundMusic.pause();
		} else {
			paused = false;
			pauseTimer = 20;
			Level.backgroundMusic.play();
		}
	}

}