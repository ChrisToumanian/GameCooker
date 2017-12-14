// Input
function Input(){
	var keys = [];
}

Input.keys = [];

// KeyDown
Input.keyDown = function(key){
	if (Input.keys[key]){return true;}
}

// Check Keyboard Event
Input.checkKeys = function(){
	window.onkeyup = function(e){Input.keys[e.keyCode]=false;}
	window.onkeydown = function(e){Input.keys[e.keyCode]=true;}
}

// Gamepad ButtonDown
Input.buttonDown = function(button){
	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  	for (var i = 0; i < gamepads.length; i++) {
    	var gp = gamepads[i];
		if (gp) {
			if (buttonPressed(gamepads[i].buttons[convertButtonID(button)])){
				return true;
			}
		}
	}	
}

// Clear keys
Input.clear = function(){
	Input.keys = [];
}

var gamepads = {};

// Gamepad Button ID Conversion
function convertButtonID(btn){
	if (btn == "a"){return 0;}
	else if (btn == "b"){return 1;}
	else if (btn == "x"){return 2;}
	else if (btn == "y"){return 3;}
	else if (btn == "leftshoulder"){return 4;}
	else if (btn == "rightshoulder"){return 5;}
	else if (btn == "leftrigger"){return 6;}
	else if (btn == "righttrigger"){return 7;}
	else if (btn == "select"){return 8;}
	else if (btn == "start"){return 9;}
	else if (btn == "dpadup"){return 12;}
	else if (btn == "dpaddown"){return 13;}
	else if (btn == "dpadleft"){return 14;}
	else if (btn == "dpadright"){return 15;}
}

// Gamepad Axis ID Conversion
function convertAxisID(axis){
	if (axis = "leftx"){return 0;}
	else if (axis = "lefty"){return 1;}
	else if (axis = "rightx"){return 2;}
	else if (axis = "righty"){return 3;}
}

// Check Gamepad Axis
function GamepadAxis(gamepad, axis){
	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  	for (var i = 0; i < gamepads.length; i++) {
    	var gp = gamepads[i];
		if (gp) {
			return gamepads[gamepad].axes[convertAxisID(axis)];
		}
	}	
}

// Check if Button is Pressed
function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}