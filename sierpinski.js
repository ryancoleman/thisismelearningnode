
function draw(response, request) {
  console.log("Request handler 'draw' was called.");
  numPointsRequested = request.url.split("?").slice(-1)[0];
  console.log('points:', numPointsRequested);

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<img src="' + sierpinski(numPointsRequested) + '" />');
  response.end();
}

function sierpinski(numPoints) {
  var Canvas = require('canvas')
    , canvas = new Canvas(500, 500)
    , ctx = canvas.getContext('2d');

  ctx.font = '30px Impact';
  ctx.fillText("Sierpinski Triangle", 50, 50);

  var te = ctx.measureText('Sierpinski Triangle');
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + te.width, 102);
  ctx.stroke();
  return canvas.toDataURL()

  /* console.log('<img src="' + canvas.toDataURL() + '" />'); */
}  

exports.draw = draw;
