// Angry Sun Mob GameObject
GameObject.prototype.AngrySun = function(){

	this.tags = ["mob", "angrysun", "sun"];
	this.speed = (Math.random() * 15) + 3;
    this.width = 128;
    this.height = 128;
	this.scale = 2;
	this.color = "white";
	this.image = angrysun_idle01;
	this.position.x = Display.width + ((Math.random() * 500) + 30);
    this.position.y = ((Math.random() * Display.height) + 0);
	this.position.z = 0;
	this.collider.enabled = true;

	// Update
	this.update = function(){

		// Movement
		this.movement();

		// Animate
		this.animate();

	}

	// Sun Movement
	this.movement = function(){

		var x = -this.speed;
		var y = 0;
		this.move(x,y,0);

		if (this.position.x < -200){
			GameObject.destroy(this);
			GameObject.spawn("AngrySun",0,0,0);
			var newSuns = ((Math.random() * 100) + 0);
			if (newSuns < 40){
				GameObject.spawn("AngrySun",0,0,0);
			}
		}

	}

	// Animate
	this.animate = function(){
		if (animationTick == 0){

			// Sun Idle
			if (this.image == angrysun_idle01){
				this.image = angrysun_idle02;
			} else if (this.image == angrysun_idle02){
				this.image = angrysun_idle01;
			}

		}
	}

}

// Angry Sun Sprites
var angrysun_idle01 = new Image();
angrysun_idle01.src = "images/angrysun_idle01.png";
var angrysun_idle02 = new Image();
angrysun_idle02.src = "images/angrysun_idle02.png";