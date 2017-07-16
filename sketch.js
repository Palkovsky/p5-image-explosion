//Setup
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//Objects
var img;
var extractor;
var shrinker;
var splasher;
var imageCenter;

//Lists
var colors;

function preload(){
	img = loadImage("images/1.png");
	imageCenter = createVector(WIDTH/2, HEIGHT/2);
}

function setup(){
	pixelDensity(1);
	createCanvas(WIDTH, HEIGHT);

	//Extract particle colors from image
	extractor = new Extractor();
	colors = extractor.getColors(extractor.extractBoxes(img, createVector(10, 10)));
	colors = shuffle(colors);

	shrinker = new ImageShrinker(img, imageCenter.copy());
	splasher = new Splasher(imageCenter.copy(), colors);
}

function draw(){
	background(0);
	
	shrinker.draw();
	splasher.update();
	splasher.draw();

}


function mouseClicked(){
	if(shrinker){
		shrinker.shrink(function(){
			splasher.restart();
		});
	}
}