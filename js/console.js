var canvas = document.getElementById('mycanvas');
var context = mycanvas.getContext('2d');
var robotSourceText = "Hello There!  | $Welcome to Tamawal Admin | # Top Features # | - Premium Admin Panel | - Widgets- Apps | - UI Elements |- New Admin Panels in next update |- and much more ...";

var currentChar = 0;
var existingLine = "";

var letters = robotSourceText.split("");

/* Referenced from (https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/) with modifications by Kevin Bonkewitzz*/
function wrapText(context, text, x, y, maxWidth, lineHeight) {
var words = text.split(' ');
var line = '';  

for(var n = 0; n < words.length; n++) {
  var testLine = line + words[n] + ' ';
  var metrics = context.measureText(testLine);
  var testWidth = metrics.width;
          
  if(words[n] == "|")
    {
      context.fillText(line, x, y);
      line = '';
      y += lineHeight;
    }
  else if (testWidth > maxWidth && n > 0) {            
    context.fillText(line, x, y);
    line = words[n] + ' ';
    y += lineHeight;
  }
  else {
    line = testLine;
  }
}
context.fillText(line, x, y);
}

function draw() {
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);

  
  if(currentChar < robotSourceText.length){
  existingLine += letters[currentChar];
    }
  
  wrapText(context, existingLine+"|", 40, 50, canvas.width-100, 30);
  
  currentChar++;
    context.fill();
    context.restore();
}

function getRandomNumber(min, max){
return Math.floor(Math.random() * (max - min)+max);
}

function setCanvasSize() {
    var context = mycanvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    context.fillStyle = "#00B8FF";          
    context.font = "20px Arial";
  loopDisplayedText();
}

(function loopDisplayedText() {
setTimeout(function() {
    draw();
    loopDisplayedText();  
}, getRandomNumber(240, 300)); //240, 300
}());

function Reset(){
currentChar = 0;
existingLine = "";
setCanvasSize();
}



setCanvasSize();
