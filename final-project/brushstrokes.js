let brushstrokes = [];


function setup(){
   console.log("p5.js working");
   canvasW = windowWidth;
   canvasH = windowHeight;
   createCanvas(canvasW, canvasH); //canvas that is window size
   background(255);





   for(let i = 0; i < 2; i++){
       brushstrokes.push(new Brushstroke());
   }
}


function draw(){
   background(255,5);


   brushstrokes.forEach (stroke => {
       stroke.move();
       stroke.display();
   })
}


class Brushstroke{
   constructor(){
       this.reset();
      
   }
   reset(){
       this.x = -50; //random x pos
       this.y = random(canvasH); //random y pos
       this.speed = random(3,6);
       this.opacity = random(100,200);
       this.color = color(random(255),random(255),random(255),this.opacity);
       // this.angle = random(360);
       this.size = random(40,80);
       // this.length = random(100,200);
       // this.width = random(20,40);


       // this.wobble = random(.02,.05);
       // this.time = random(1000);
       this.strokeCount = 15;
       this.strokeWidth = random(30,60);
       this.currentX = this.x;
       this.currentY = this.y
       // this.x = -50;
       // this.y = random(canvasH);
       // this.currentX = this.x;
       // this.currentY = this.y
       // this.color = color(random(255),random(255),random(255), this.opacity);
       //this.angle = random(360);


       //ChatGPT helped me with figuring out the math here for the brush angle and wave dynamics
       this.pressure = random(0.5,1);
       this.direction = random(PI/6, PI/3);
       this.curveAmplitude = random(20,50);
       this.curveFrequency = random(.01,.03);
       this.startTime = frameCount;


       this.brushSpread = random(0.5, 2);
       this.dryBrush = random(0.3,0.7);




   }


   move(){
       this.currentX = this.x;
       this.currentY = this.y
       // this.color = color(random(255),random(255),random(255), this.opacity);
       let time = frameCount - this.startTime;


       this.x += this.speed;
       this.y += sin(time * this.curveFrequency) * this.curveAmplitude * 0.1;


       // this.waveSpeed = random(.02, .08);
       // this.waveHeight = random(.3, 2);
       // this.offset = random(1000);






       // this.x += this.speed;
       //this.y += sin(frameCount * .05)*.5;
       // this.y += sin(frameCount * this.waveSpeed + this.offset)* this.waveHeight;


       if(this.x > canvasW) {
           // this.x = 0;
           // this.y = random(canvasH);
           // this.currentX = this.x;
           // this.currentY = this.y
           // this.color = color(random(255),random(255),random(255), this.opacity);
           this.reset();
       }
   }


   display(){
       //first stroke
       strokeWeight(this.strokeWidth);
       strokeCap(SQUARE);
       stroke(this.color);
       line(this.currentX, this.currentY, this.x, this.y);


       //multiple strokes
       for(let i = 0; i<this.strokeCount; i ++){
           let offset = this.strokeWidth * 0.3;
           let pressureAdjust = random(0.8, 1.5);
           let trailingColor = color(red(this.color), green(this.color), blue(this.color),this.opacity * random(0.9, 0.95));
           stroke(trailingColor);
           strokeWeight(this.strokeWidth * this.pressure * pressureAdjust * 0.3);
          
           let offsetPaint = offset * (sin(frameCount * .1 + i) + random (-0.5, 0.5));


           line(
               this.currentX + random(-offsetPaint, offsetPaint),
               this.currentY + random(-offsetPaint, offsetPaint),
               this.x + random(-offsetPaint, offsetPaint),
               this.y + random(-offsetPaint, offsetPaint)
           );
       }  
   }
      
}




function windowResized(){
   canvasW = windowWidth;
   canvasH = windowHeight;
   resizeCanvas(canvasW, canvasH);
   background(255);
}

