var Particle = function(x, y, attributes){

	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
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

	this.applyForces = function(forces){
		if(!Array.isArray(forces)){
			this.acc.add(forces);
		}else{
			for(var i = 0; i < forces.length; i++){
				this.acc.add(forces[i]);
			}
		}
		
	}
}