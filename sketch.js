let circleY = 0;
let pixelCount = 90
let pixels = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	frameRate(24)
	for(let i = 0; i < pixelCount; i++){
		tmp = new Pixel();
		pixels.push(tmp);
	}
}

function draw() {
	background(50);

	for(let i = 0; i < pixelCount; i++){
		pixels[i].move();
		pixels[i].display();
		for(let j = 0; j < pixelCount; j++){
			if(j != i){
				let distance = calcDistance(pixels[i],pixels[j]);
				console.log(distance)
				if(distance <= 100){
					stroke(200)
					line(pixels[i].x,pixels[i].y,pixels[j].x,pixels[j].y)
				}else if(distance <= 120){
					stroke(200,200,200,100)
					
					line(pixels[i].x,pixels[i].y,pixels[j].x,pixels[j].y)
				}
			}
		}
	}

}

function calcDistance(pixel1,pixel2){
	let disX = pixel1.x - pixel2.x
	let disY = pixel1.y - pixel2.y

	let dis = sqrt(disX*disX+disY*disY)
	return dis
}

class Pixel{
	constructor() {
		let speed = 5
		this.x = random(windowWidth);
		this.y = random(windowHeight);
		this.speedY = random(-200,200) / (100 * speed)
		this.speedX = random(-200,200) / (100 * speed)

	}

	move(){
		this.x += this.speedX
		this.y += this.speedY
		if(this.x >= windowWidth || this.x <= 0){
			this.speedX = this.speedX * -1
		}
		if(this.y >= windowHeight || this.y <= 0){
			this.speedY = this.speedY * -1
		}
	}

	display(){
		circle(this.x, this.y, 3);
		noStroke();
	}
}