let brushstrokes = [];
function setup() {
  console.log("p5.js working");
  canvasW = windowWidth;
  canvasH = windowHeight;
  createCanvas(canvasW, canvasH); 
  background(255);
  for (let i = 0; i < random(1,3); i++) {
    brushstrokes.push(new Brushstroke());
  }
}
//draw the brushstrokes
function draw() {
  background(255, 5);
  brushstrokes.forEach((stroke) => {
    stroke.move();
    stroke.display();
  });
}
class Brushstroke {
  constructor() {
    this.reset();
  }
  reset() {
    //start
    this.x = -50;
    this.y = random(canvasH);
    this.speed = random(3, 5);
    //style
    this.opacity = random(100, 200);
    this.color = color(random(255), random(255), random(255), this.opacity);
    this.size = random(40, 80);
    this.strokeCount = 15;
    this.strokeWidth = random(30, 60);
    this.currentX = this.x;
    this.currentY = this.y;
    this.pressure = random(0.5, 1); 
    //ChatGPT helped me with figuring out the math here for the brush angle and wave dynamics
    this.direction = random(PI / 6, PI / 3);
    this.curveAmplitude = random(20, 50);
    this.curveFrequency = random(0.01, 0.03);
    this.startTime = frameCount;
    this.brushSpread = random(0.5, 2);
    this.dryBrush = random(0.3, 0.7);
  }
  move() {
    this.currentX = this.x;
    this.currentY = this.y;
    let time = frameCount - this.startTime;
    this.x += this.speed;
    this.y += sin(time * this.curveFrequency) * this.curveAmplitude * 0.1;
    if (this.x > canvasW) {
      this.reset();
    }
  }
  display() {
    //first stroke
    strokeWeight(this.strokeWidth);
    strokeCap(SQUARE);
    stroke(this.color);
    line(this.currentX, this.currentY, this.x, this.y);
    //multiple strokes
    for (let i = 0; i < this.strokeCount; i++) {
      let offset = this.strokeWidth * 0.3;
      let pressureAdjust = random(0.8, 1.5);
      let trailingColor = color(
        red(this.color),
        green(this.color),
        blue(this.color),
        this.opacity * random(0.9, 0.95)
      );
      stroke(trailingColor);
      strokeWeight(this.strokeWidth * this.pressure * pressureAdjust * 0.3);
      let offsetPaint =
        offset * (sin(frameCount * 0.1 + i) + random(-0.5, 0.5));
      line(
        this.currentX + random(-offsetPaint, offsetPaint),
        this.currentY + random(-offsetPaint, offsetPaint),
        this.x + random(-offsetPaint, offsetPaint),
        this.y + random(-offsetPaint, offsetPaint)
      );
    }
  }
}
function windowResized() {
  canvasW = windowWidth;
  canvasH = windowHeight;
  resizeCanvas(canvasW, canvasH);
  background(255);
}
