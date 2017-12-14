// GameObject Text
GameObject.prototype.Diagnostics = function(){

    this.name = "diagnostics";
    this.visible = false;

    // Create FPS UI
    GameObject.spawn("Text", 30, 50, -4, "FPS");
    var FPSID = GameObject.getID("FPS");

    // Create GameObjects UI
    GameObject.spawn("Text", 30, 100, -4, "GameObjectsUI");
    var GameObjectsUI = GameObject.getID("GameObjectsUI");

	// Update
	this.update = function(){
        
        gameObjectArray[FPSID].text = "FPS: " + Math.round(Display.FPS);
        gameObjectArray[GameObjectsUI].text = "OBJECTS: " + gameObjectArray.length;

    }

}