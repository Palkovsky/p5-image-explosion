//Setup
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//Objects
var img;
var extractor;

//Lists
var colors;

function preload(){
	img = loadImage("images/1.png");
	extractor = new Extractor();
}

function setup(){
	pixelDensity(1);
	createCanvas(WIDTH, HEIGHT);
	colors = extractor.getColors(extractor.extractBoxes(img, createVector(10, 10)));
}

function draw(){
	background(255);
	image(img, WIDTH/2 - img.width/2, HEIGHT/2 - img.height/2);



	for(var i = 1; i <= colors.length; i++){
		var color = colors[i - 1];
		push();
		fill(color);
		ellipse(i * 7, 20, 5);
		pop();
	}
}