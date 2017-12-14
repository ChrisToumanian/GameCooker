// Mario Coin Entity
GameObject.prototype.Coin = function(){

	this.tags = ["coin", "item"];
	this.speed = Math.floor((Math.random() * 15) + 7);
    this.width = 64;
    this.height = 64;
	this.color = "white";
	this.image = coin05;
	this.position.x = Display.width + 20;
    this.position.y = Math.floor((Math.random()*Display.height)+1);
	this.position.z = 1;
	this.collider.enabled = true;

	// Update
	this.update = function(){

		// Move
    	this.scroll();

		// Animate
		this.animate();

	}

	// Picked Up
	this.pickUp = function(){

		// Play coin sound
		coinSound.currentTime = 0;
		coinSound.play();

		// Move back to front of the screen
		this.position.x = Display.width + ((Math.random() * 1000) + 0);
        this.position.y = Math.floor((Math.random()*Display.height)+1);
		var newCoins = ((Math.random() * 100) + 0);
		if (newCoins < 10){
			GameObject.spawn("Coin",0,0,0);
		}

	}

	// Move
	this.scroll = function(){

		// Move Coin
      	this.move(-this.speed, 0 ,0);

		// Relocate to front
		if (this.position.x < -20){
			this.setPosition(Display.width + 20, Math.floor((Math.random() * Display.height) + 1), this.position.z);
		}

	}
    
	// Reproduce random offspring
	this.reproduceRandomly = function(offspring){
		
		for (var i = 0; i < offspring; i++){
			GameObject.spawn("Coin", 0, 0);
		}

	}

	// Animate
	this.animate = function(){
		if (animationTick == 0){

			// Flying
			if (this.image == coin01){
				this.image = coin02;
			} else if (this.image == coin02){
				this.image = coin03;
			} else if (this.image == coin03){
				this.image = coin04;
			} else if (this.image == coin04){
				this.image = coin05;
			} else if (this.image == coin05){
				this.image = coin06;
			} else if (this.image == coin06){
				this.image = coin01;
			}

		}
	}

}

// Mario Spinning Coin Sprites
var coin01 = new Image();
coin01.src = "images/coin01.png";
var coin02 = new Image();
coin02.src = "images/coin02.png";
var coin03 = new Image();
coin03.src = "images/coin03.png";
var coin04 = new Image();
coin04.src = "images/coin04.png";
var coin05 = new Image();
coin05.src = "images/coin05.png";
var coin06 = new Image();
coin06.src = "images/coin06.png";

// Mario Coin Sounds
coinSound = new Audio("sounds/Super Mario Bros 3 - Coin.wav");
coinSound.volume = 0.5;