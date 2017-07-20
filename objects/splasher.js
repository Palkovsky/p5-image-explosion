var Splasher = function(pos, colors){

	this.startPos = pos;
	this.colors = colors;
	this.particles = [];
	this.active = false;

	this.init = function(){


		var xBaseForce = 10;
		var yBaseForce = 20;

		var yOff = 0;
		var xOff = 0;

		for(var i = 0; i < this.colors.length; i++){
			
			var particle = new Particle(this.startPos.x, this.startPos.y,
			 	{
			 		radius : random(5, 15),
			 		color : colors[i].slice()
			 	}
			);

			yOff += 0.5;
			xOff += 0.7;

			particle.applyForces(createVector(map(noise(xOff), 0, 1, -1, 1) * xBaseForce, -noise(yOff) * yBaseForce));
			this.particles.push(particle);
		}
	}

	this.init();

	this.update = function(){
		if(this.active){
			for(var i = 0; i < this.particles.length; i++){
				this.particles[i].applyForces([
					createVector(0, .03 * this.particles[i].attributes.radius) //gravity
				]); 
				//this.particles[i].attributes.color[3] -= 2;
				this.particles[i].update();
			}
		}
	}

	this.draw = function(){
		if(this.active){
			for(var i = 0; i < this.particles.length; i++){
				this.particles[i].draw(drawParticle);
			}
		}
	}

	/*
		Function passed as a drawer for particle draw method.
	*/
	var drawParticle = function(particle){
		push();
		noStroke();
		fill(particle.attributes.color);
		ellipse(particle.pos.x, particle.pos.y, particle.attributes.radius);
		pop();
	}

	this.start = function(){
		this.active = true;
	}

	this.reload = function(){
		this.particles = [];
		this.active = false;
		this.init();
	}

	this.restart = function(){
		this.reload();
		this.start();
	}
}