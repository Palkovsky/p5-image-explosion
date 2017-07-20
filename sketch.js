//Setup
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var PARTICLES_NUM = 1000;

//Objects
var img;
var shrinker;
var splasher;
var imageCenter;

//Lists
var colors;

function preload(){
	img = loadImage("images/7.jpg");
	imageCenter = createVector(WIDTH/2, HEIGHT/2);
}

function setup(){
	pixelDensity(1);
	createCanvas(WIDTH, HEIGHT);

	//Extract particle colors from image
	var extractor = new Extractor();
	var kernel_size = extractor.calculateKernelSize(img, PARTICLES_NUM);
	colors = extractor.getColors(extractor.extractBoxes(img, kernel_size));
	colors = shuffle(colors);
	console.log(colors.length);

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