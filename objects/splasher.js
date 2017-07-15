var Splasher = function(pos, colors){

	this.startPos = pos;
	this.colors = colors;
	this.particles = [];
	this.active = false;

	this.init = function(){
		for(var i = 0; i < this.colors.length; i++){
			this.particles.push(new Particle(this.startPos.x, this.startPos.y,
			 	{
			 		radius : random(5, 15),
			 		color : colors[i]
			 	}
			 ));
		}
	}

	this.init();

	this.update = function(){
		if(this.active){
			for(var i = 0; i < this.particles.length; i++){
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
		Function passed as drawing function for particle draw method.
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