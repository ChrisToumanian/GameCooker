// Passing Star Entity
GameObject.prototype.Star = function(){

	this.tags = ["star"];
	this.speed = Math.floor((Math.random() * 5) + 2);
    this.width = 3 * this.speed / 2 + (Math.floor((Math.random() * -2) + 2));
    this.height = 3 + (Math.floor((Math.random() * -3) + 3));
	this.color = "white";

	// Update
	this.update = function(){

		// Move back to front of screen
		if (this.position.x < -20){
			var newPosX = Display.width + 20;
			var newPosY = Math.floor((Math.random() * Display.height) + 1);
          	this.position.x = newPosX;
          	this.position.y = newPosY;
		}

		// Move Star
		this.move(-this.speed,0,0);

	}

}

// Random Star Spawner
function randomStarSpawner(){
	for (var i = 0; i < Display.width / 5; i++){
		var newPosX = Math.floor((Math.random() * Display.width) + 1);
		var newPosY = Math.floor((Math.random() * Display.height) + 1);
		GameObject.spawn("Star", newPosX, newPosY, 3);
	}
}