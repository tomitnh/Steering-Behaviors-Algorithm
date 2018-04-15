/***********
 * Controller.js 
 *
 * Controls frame animation and drawing on the canvas
 */

var fps = 30; // Standard frames per second
window.setInterval(animate, 1000/fps);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var dots = [];

var helloOutline = {0: {x :176,y :157}, 1: {x :173,y :158}, 2: {x :174,y :163}, 3: {x :174,y :168}, 4: {x :174,y :176}, 5: {x :173,y :186}, 6: {x :173,y :198}, 7: {x :173,y :210}, 8: {x :174,y :220}, 9: {x :175,y :230}, 10: {x :174,y :239}, 11: {x :174,y :250}, 12: {x :184,y :251}, 13: {x :187,y :243}, 14: {x :187,y :232}, 15: {x :187,y :222}, 16: {x :189,y :214}, 17: {x :190,y :204}, 18: {x :194,y :198}, 19: {x :199,y :194}, 20: {x :211,y :196}, 21: {x :216,y :204}, 22: {x :215,y :212}, 23: {x :215,y :222}, 24: {x :216,y :232}, 25: {x :216,y :240}, 26: {x :216,y :247}, 27: {x :226,y :250}, 28: {x :228,y :242}, 29: {x :229,y :230}, 30: {x :230,y :219}, 31: {x :230,y :213}, 32: {x :230,y :202}, 33: {x :227,y :192}, 34: {x :221,y :187}, 35: {x :215,y :183}, 36: {x :209,y :183}, 37: {x :202,y :184}, 38: {x :196,y :186}, 39: {x :190,y :186}, 40: {x :189,y :192}, 41: {x :189,y :184}, 42: {x :190,y :180}, 43: {x :190,y :171}, 44: {x :188,y :163}, 45: {x :188,y :159}, 46: {x :258,y :184}, 47: {x :254,y :188}, 48: {x :251,y :193}, 49: {x :246,y :201}, 50: {x :242,y :209}, 51: {x :244,y :221}, 52: {x :245,y :232}, 53: {x :252,y :244}, 54: {x :264,y :251}, 55: {x :280,y :251}, 56: {x :294,y :248}, 57: {x :302,y :237}, 58: {x :302,y :232}, 59: {x :292,y :229}, 60: {x :285,y :238}, 61: {x :276,y :241}, 62: {x :267,y :239}, 63: {x :260,y :230}, 64: {x :257,y :225}, 65: {x :260,y :220}, 66: {x :271,y :221}, 67: {x :285,y :221}, 68: {x :297,y :221}, 69: {x :304,y :220}, 70: {x :306,y :208}, 71: {x :300,y :199}, 72: {x :294,y :190}, 73: {x :285,y :185}, 74: {x :276,y :182}, 75: {x :268,y :182}, 76: {x :315,y :159}, 77: {x :318,y :170}, 78: {x :316,y :182}, 79: {x :316,y :193}, 80: {x :316,y :207}, 81: {x :315,y :223}, 82: {x :318,y :234}, 83: {x :318,y :245}, 84: {x :317,y :252}, 85: {x :328,y :252}, 86: {x :329,y :243}, 87: {x :329,y :234}, 88: {x :329,y :222}, 89: {x :329,y :208}, 90: {x :329,y :197}, 91: {x :329,y :183}, 92: {x :332,y :170}, 93: {x :332,y :164}, 94: {x :330,y :159}, 95: {x :322,y :159}, 96: {x :347,y :160}, 97: {x :347,y :172}, 98: {x :348,y :185}, 99: {x :347,y :197}, 100: {x :346,y :203}, 101: {x :346,y :213}, 102: {x :346,y :226}, 103: {x :346,y :238}, 104: {x :346,y :252}, 105: {x :356,y :251}, 106: {x :357,y :242}, 107: {x :358,y :229}, 108: {x :358,y :216}, 109: {x :358,y :204}, 110: {x :358,y :190}, 111: {x :358,y :177}, 112: {x :359,y :167}, 113: {x :358,y :156}, 114: {x :355,y :159}, 115: {x :263,y :210}, 116: {x :276,y :211}, 117: {x :287,y :210}, 118: {x :287,y :202}, 119: {x :281,y :198}, 120: {x :270,y :198}, 121: {x :264,y :200}, 122: {x :262,y :203}, 123: {x :258,y :209}, 124: {x :386,y :202}, 125: {x :387,y :212}, 126: {x :385,y :220}, 127: {x :386,y :231}, 128: {x :396,y :237}, 129: {x :407,y :237}, 130: {x :415,y :231}, 131: {x :418,y :222}, 132: {x :419,y :213}, 133: {x :415,y :206}, 134: {x :413,y :201}, 135: {x :406,y :197}, 136: {x :397,y :198}, 137: {x :400,y :182}, 138: {x :387,y :188}, 139: {x :382,y :192}, 140: {x :377,y :199}, 141: {x :372,y :210}, 142: {x :373,y :224}, 143: {x :378,y :235}, 144: {x :385,y :247}, 145: {x :402,y :251}, 146: {x :419,y :249}, 147: {x :427,y :239}, 148: {x :430,y :224}, 149: {x :431,y :207}, 150: {x :427,y :195}, 151: {x :421,y :190}, 152: {x :415,y :187}, 153: {x :410,y :186}};

var vehicles = [];

for (var h in helloOutline) {
	var dot = helloOutline[h];
	var vehicle = new Vehicle(dot.x, dot.y);
	vehicles.push(vehicle);
}

// Register click listner
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseover', mouseOver);

function mouseDown(e) {
	dots.push(new Vector(e.x, e.y));
	console.log(e);
}

function mouseOver(e) {
	console.log(e)
}

// Drawing dots onto a TextPath 
function draw() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// ctx.fillStyle = 'white';
	// ctx.font = '128px sans-serif';
	// ctx.textAlign = 'center';
	// ctx.fillText('hello', canvas.width/2, 250);

	// drawDots()

	for (var i in vehicles) {
		var v = vehicles[i];
		v.update()
		v.show();
	}

}

function drawDots () {
	for (var i = 0; i < dots.length; i++) {
		var r = 3;
		var dot = dots[i];
		ellipse(dot.x, dot.y, r, r);
		ctx.fillStyle = 'green';
		ctx.fill();
	}
}

function dotsToJSON () {
	var str = '{';

	for (var i = 0; i < dots.length; i++) {
		var dot = dots[i];
		str = str + ' ' + i + ': {' +
		'x :' + dot.x + ',' +
		'y :' + dot.y + '},'
	}

	str += '}';

	return str;
}

function animate() {

	// clear canvas and draw new frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}

function dist(x1, y1, x2, y2) {
	// calculating distance with Pythagorean theorem
	var a = x2 - x1;
	var b = y2 - y1;
	return Math.sqrt(a*a + b*b);
}

function line (x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}

function ellipse (x, y, r1, r2) {
	ctx.beginPath();
	ctx.ellipse(x, y, r1, r2, 0, 0, 2 * Math.PI);
	ctx.stroke();
}