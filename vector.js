/* 2D Physic calculations
 * TODO:
 * - mult()
 * - setMag() 
 * - sub() 
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
}