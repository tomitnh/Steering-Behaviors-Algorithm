class Vehicle {
	constructor (x, y) {
		this.pos = new Vector(x, y);
		this.target = new Vector(x, y);
		// this.vel = new Vector(Math.random()*5, Math.random()*5);
		this.vel = new Vector(0, 0);
		this.acc = new Vector(0, 0);
		this.r = 3;		// radius of the to-be-rendered circle
		this.maxspeed = 5;
	}

	behaviors () {
		var seek = this.seek(this.target);
		this.applyForce(seek);
	}

	applyForce (f) {
		this.acc.add(f);
	}

	seek (target) {
		var desired = Vector.sub(target, this.pos);	// TODO
		desired.setMag(this.maxspeed); // TODO
		var steer = Vector.sub(desired, this.vel);
		return steer;
	}

	update () {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0); // TODO
	}

	show () {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
		ctx.fillStyle = 'white';
		ctx.fill();
	}
} 