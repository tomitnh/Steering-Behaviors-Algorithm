class Vehicle {
	constructor (x, y) {
		this.pos = new Point(x, y);
		this.target = new Point(x, y);
		this.vel = new Point(Math.random()*5, Math.random()*5);
		this.acc = new Point(0, 0);
		this.r = 3;		// radius of the to-be-rendered circle
	}

	update () {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
	}

	show () {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
		ctx.fillStyle = 'white';
		ctx.fill();
	}
} 