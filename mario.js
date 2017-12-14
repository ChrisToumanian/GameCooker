// Player
GameObject.prototype.Mario = function(){

	this.tags = ["player", "mario"];
	this.name = "mario";
	this.health = 1;
	this.speed = 12;
    this.width = 128;
    this.height = 128;
	this.scale = 2;
	this.color = "red";
	this.image = mario_flying01;
	this.borderCollision = true;
	this.flying = true;
	this.coins = 0;
	this.collider.width = this.width * 0.5;
	this.collider.height = this.height * 0.5;
	this.collider.enabled = true;
	this.collider.borders.enabled = true;

	// Update
	this.update = function(){

		// Collisions
		this.detectCollisions();

		var x = 0;
		var y = 0;

		// Check Inputs
		if (Input.keyDown("87")){y -= this.speed;}
		if (Input.keyDown("83")){y += this.speed;}
		if (Input.keyDown("65")){x -= this.speed * 2;}
		if (Input.keyDown("68")){x += this.speed;}

		this.move(x,y,0);

		// Animate
		this.animate();

	}

	// Collision Trigger
	this.collision = function(id){

		// Coins
		if (gameObjectArray[id].containsTag("coin")){
			this.receiveCoins(1);
			gameObjectArray[id].pickUp();
		}

		// Mob
		if (gameObjectArray[id].containsTag("mob")){
			this.damage(1);
		}

	}

	// Update Coin Counter
	this.receiveCoins = function(increase){
		this.coins += increase;
		gameObjectArray[1].text = String(this.coins) + " COINS";
	}

	// Animate
	this.animate = function(){
		if (animationTick == 0){

			// Flying
			if (this.flying){
				if (this.image == mario_flying01){
					this.image = mario_flying02;
				} else if (this.image == mario_flying02){
					this.image = mario_flying03;
				} else if (this.image == mario_flying03){
					this.image = mario_flying04;
				} else if (this.image == mario_flying04){
					this.image = mario_flying01;
				}
			}

		}
	}

	// Damage
	this.damage = function(dmg){
		this.health -= dmg;
		if (this.health < 1){
			this.die();
		}
	}

	// Death Event
	this.die = function(){
		this.image = mario_dead;
		Player.score = this.coins;

		/*
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
			gameObjectArray[GameObject.getID("textLeaderboard")].visible = true;
			gameObjectArray[GameObject.getID("textLeaderboard01")].text = Player.leader[1].username + "                  " + Player.leader[1].highScore;
			gameObjectArray[GameObject.getID("textLeaderboard01")].visible = true;
			gameObjectArray[GameObject.getID("textLeaderboard01")].text = Player.leader[1].username + "                  " + Player.leader[1].highScore;
			gameObjectArray[GameObject.getID("textLeaderboard01")].visible = true;
			gameObjectArray[GameObject.getID("textLeaderboard02")].text = Player.leader[2].username + "                  " + Player.leader[2].highScore;
			gameObjectArray[GameObject.getID("textLeaderboard02")].visible = true;
			gameObjectArray[GameObject.getID("textLeaderboard03")].text = Player.leader[3].username + "                  " + Player.leader[3].highScore;
			gameObjectArray[GameObject.getID("textLeaderboard03")].visible = true;
			gameObjectArray[GameObject.getID("textLeaderboard04")].text = Player.leader[4].username + "                  " + Player.leader[4].highScore;
			gameObjectArray[GameObject.getID("textLeaderboard04")].visible = true;
			gameObjectArray[GameObject.getID("textLeaderboard05")].text = Player.leader[5].username + "                  " + Player.leader[5].highScore;
			gameObjectArray[GameObject.getID("textLeaderboard05")].visible = true;
		}
		*/

		gameObjectArray[GameObject.getID("gameover")].visible = true;

		marioDeathSound.play();
		Level.gameOver("level01");
	}

}

// Mario Flying Sprites
var mario_flying01 = new Image();
mario_flying01.src = "images/mario_flying01.png";
var mario_flying02 = new Image();
mario_flying02.src = "images/mario_flying02.png";
var mario_flying03 = new Image();
mario_flying03.src = "images/mario_flying03.png";
var mario_flying04 = new Image();
mario_flying04.src = "images/mario_flying04.png";

// Mario Dead Sprite
var mario_dead = new Image();
mario_dead.src = "images/mario_dead.png";

// Mario Death Sound
marioDeathSound = new Audio("sounds/mario_death.mp3");