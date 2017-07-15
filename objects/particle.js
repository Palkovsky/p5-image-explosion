var Particle = function(x, y, attributes){

	this.pos = createVector(x, y);
	this.vel = createVector(random(-5, 5), random(-5, 5));
	this.acc = createVector(0, 0);
	this.attributes = attributes;

	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc = createVector(0, 0);
	}

	this.draw = function(drawer){
		drawer(this);
	}

	this.applyForce = function(force){
		this.acc.add(force);
	}
}