/* 2D Physic calculations
 * normalize() and mag() calc: https://www.youtube.com/watch?v=uHusbFmq-4I
 */
class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(p) {
		this.x += p.x;
		this.y += p.y;
	}

	sub(p) {
		this.x -= p.x;
		this.y -= p.y;
	}

	copy() {
		return new Vector(this.x, this.y);
	}

	// Multiply by a scalar
	mult(s) {
		this.x *= s;
		this.y *= s;
	}

	setMag(m) {
		this.normalize();
		this.mult(m);
	}

	mag() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	normalize () {
		var m = this.mag();
		if (m != 0) {
			this.x = this.x/m;
			this.y = this.y/m;
		}
	}
}