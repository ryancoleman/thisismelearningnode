var Canvas = require('canvas')
  , canvas = new Canvas(500, 500)
  , ctx = canvas.getContext('2d');

ctx.font = '30px Impact';
ctx.rotate(.9);
ctx.fillText("Sierpinski Triangle", 50, 50);

var te = ctx.measureText('Awesome!');
ctx.strokeStyle = 'rgba(0,0,0,0.5)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + te.width, 102);
ctx.stroke();

console.log('<img src="' + canvas.toDataURL() + '" />');
