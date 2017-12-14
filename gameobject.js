var gameObjectArray = [];

// GameObject
function GameObject(spawnPosX, spawnPosY, spawnPosZ, name){

	// Initial Variables
	this.id = gameObjectArray.length;
	this.name = name;
	this.tags = [];
	this.width = 10;
    	this.height = 10;
	this.position = [];
	this.position.x = spawnPosX;
	this.position.y = spawnPosY;
	this.position.z = spawnPosZ;
	this.visible = true;
	this.color = "white";
	this.changeDirection = false;
	this.collider = [];
	this.collider.height = this.height;
	this.collider.width = this.width;
	this.collider.enabled = false;
	this.collider.borders = [];
	this.collider.borders.enabled = false;
	
	// Add GameObject to array
	gameObjectArray.push(this);
  
  	// Move
  	this.move = function(x,y,z){

		// Detect Level Border Collisions
		if (this.collider.borders.enabled == true){
			if (this.detectBorderCollision() == 1){
				if (y < 0){y = 0;}
			} else if (this.detectBorderCollision() == 2){
				if (y > 0){y = 0;}
			} else if (this.detectBorderCollision() == 3){
				if (x < 0){x = 0;}
			} else if (this.detectBorderCollision() == 4){
				if (x > 0){x = 0;}
			} else if (this.detectBorderCollision() == 5){
				if (y > 0){y = 0;}
				if (x > 0){x = 0;}
			} else if (this.detectBorderCollision() == 6){
				if (y < 0){y = 0;}
				if (x < 0){x = 0;}
			} else if (this.detectBorderCollision() == 7){
				if (x > 0){x = 0;}
				if (y < 0){y = 0;}
			} else if (this.detectBorderCollision() == 8){
				if (x < 0){x = 0;}
				if (y > 0){y = 0;}
			}
		}

		// Move GameObject
		this.position.x += x;
		this.position.y += y;
		this.position.z += z;

 	}

	// Level Border Collision Detection
	this.detectBorderCollision = function(){

			if (this.position.y < Level.border.top){
				return 1; // Top
			} else if (this.position.y > Level.border.bottom){
				return 2; // Bottom
			} else  if (this.position.x < Level.border.left){
				return 3; // Left
			} else  if (this.position.x > Level.border.right){
				return 4; // Right
			} else  if (this.position.x > Level.border.right && this.position.y > Level.border.bottom){
				return 5; // Right Bottom
			} else  if (this.position.x < Level.border.left && this.position.y < Level.border.top){
				return 6; // Left Top
			} else  if (this.position.x > Level.border.right && this.position.y < Level.border.top){
				return 7; // Right Top
			} else  if (this.position.x < Level.border.left && this.position.y > Level.border.bottom){
				return 8; // Left Bottom
			} else {
				return 0;
			}

	}

	// Collision Trigger
	this.collision = function(id){
		
	}

	// Detect ObjectCollision
	this.detectCollisions = function(){

		var collisions = [];

		// Search for local colliding objects
		for (var i = 0; i < gameObjectArray.length; i++){	
			if (gameObjectArray[i] != null){
				if (gameObjectArray[i].collider.enabled && gameObjectArray[i].id != this.id){
					if ((gameObjectArray[i].position.x > this.position.x - this.width/2 - gameObjectArray[i].width*0.2) 
							&& (gameObjectArray[i].position.x < this.position.x + this.width/2 + gameObjectArray[i].width*0.2)
							&& (gameObjectArray[i].position.y > this.position.y - this.width/2 - gameObjectArray[i].width*0.2) 
							&& (gameObjectArray[i].position.y < this.position.y + this.width/2 + gameObjectArray[i].width*0.2)){
						collisions.push(gameObjectArray[i].id);
					}
				}
			}
		}

		// Call the collision trigger
		if (collisions.length > 0){
			for (var i = 0; i < collisions.length; i++){
				this.collision(collisions[i]);
			}
		}

	}

	// Set GameObject position
	this.setPosition = function(x,y,z){
		this.position.x = x;
		this.position.y = y;
		this.position.z = z;
	}

	// Check if GameObject contains tag
	this.containsTag = function(tag){
		return !!(this.tags.indexOf(tag) + 1);
	}

	this.destroy = function(object){
		delete gameObjectArray[object.id];
	}

	// Update
	this.update = function(){
    }

}

// Spawn
GameObject.spawn = function(type, posX, posY, posZ, name){
    var gameObject = new GameObject(posX, posY, posZ, name)[type]();
}

// Destroy
GameObject.destroy = function(object){
	delete gameObjectArray[object.id];
}

// Tags
GameObject.tags = [];

// Check if tag exists
GameObject.tags.contains = function(tag){
	for (var i = 0; i < gameObjectArray.length; i++){
		return !!(gameObjectArray[i].tags.indexOf(tag) + 1);
	}
}

// Return GameObject IDs of a tag
GameObject.tags.getIDs = function(tag){
	var IDArray = [];
	for (var i = 0; i < gameObjectArray.length; i++){
		if (!!(gameObjectArray[i].tags.indexOf(tag) + 1)){
			IDArray.push(gameObjectArray[i].id);
		}
	}
	return IDArray;
}

// Return GameObject ID of a name
GameObject.getID = function(name){
	for (var i = 0; i < gameObjectArray.length; i++){
		if (!!(gameObjectArray[i].name.indexOf(name) + 1)){
			return gameObjectArray[i].id;
		}
	}
}
