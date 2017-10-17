var gridHeight = 200;
var gridWidth = 300;
var cellSize = 2;
var columnWidth=4;
var xStart = 40;
var yStart = 140;
var useSecondPixels = false;
var counter1 = 0;
var counter2 = 0;

var img1,img2;

function preload() {
    img1=loadImage("images/bear.jpg");
    img2=loadImage("images/ocelot.jpg");
}


function setup() {
    createCanvas(1200,800);
    background(100);

       img1.loadPixels();
       img2.loadPixels();


    for (var x=0;x<gridWidth;x++) {

    counter1 = counter1 +1;

    if (counter1 < columnWidth) {
      counter1 = counter1+1;
    }
    else {
    changeColor();
    counter1=0;
    }

    for(var y=0;y<gridHeight;y++) {        
        var pixelColor;      
        var index = (x + y * img1.width)*4;

                
        counter2 = counter2 + 1;
        
        if (counter2 < columnWidth) {
              counter2 = counter2+1;
            }
            else {
            changeColor();
            counter2=0;
            }
        
        if(useSecondPixels) {
                pixelColor = [img1.pixels[index],
                              img1.pixels[index+1],
                              img1.pixels[index+2]
                              ];

                fill(pixelColor);
            }
        else {
                pixelColor = [img2.pixels[index],
                              img2.pixels[index+1],
                              img2.pixels[index+2]
                              ];
                fill(pixelColor);
            }
        noStroke();
        rect(x*cellSize+xStart,y*cellSize+yStart,cellSize,cellSize);

        }
    }


}

function draw() {

}

function changeColor() {
if (useSecondPixels) {
useSecondPixels = false;
}
else {
    columnWidth = random(50);
useSecondPixels = true;
}

}