class Vehicle {
	constructor (x, y) {
		var canvas = document.getElementById('canvas');
		this.pos = new Vector(Math.random()*canvas.width, Math.random()*canvas.height);
		this.target = new Vector(x, y);
		this.vel = new Vector(Math.random()*5, Math.random()*5);
		// this.vel = new Vector(0, 0);
		this.acc = new Vector(0, 0);
		this.r = 3;		// radius of the to-be-rendered circle
		this.maxspeed = 1.5;
	}

	behaviors () {
		var seek = this.seek(this.target);
		this.applyForce(seek);
	}

	applyForce (f) {
		this.acc.add(f);
	}

	seek (target) {
		var desired = target.copy();
		desired.sub(this.pos);
		desired.setMag(this.maxspeed);

		var steer = desired.copy();
		steer.sub(this.vel);
		return steer;
	}

	update () {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
	}

	show () {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
		ctx.fillStyle = 'white';
		ctx.fill();
	}
} 