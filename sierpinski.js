
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
    , canvas = new Canvas(500, 600)
    , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  ctx.fillText("Sierpinski Triangle " + numPoints, 50, 550);
  if (numPoints > 100000) {
    numPoints = 100000; /* about 100000, all points are done, so cheat */
  }
  destinations = [[250, 1], [1, 499], [499, 499]];
  curPoint = [Math.floor(Math.random()*500), Math.floor(Math.random()*500)];
  ctx.strokeStyle = 'rgba(0, 1, 1, 1)';
  ctx.beginPath();
  ctx.rect(curPoint[0], curPoint[1], 1, 1);
  for (count = numPoints; count >= 0; count--) {
    curDestination = destinations[Math.floor(Math.random() * 3)];
    curPoint[0] = (curPoint[0] + curDestination[0]) / 2.0;
    curPoint[1] = (curPoint[1] + curDestination[1]) / 2.0;
    ctx.rect(curPoint[0], curPoint[1], 1, 1);
  }
  ctx.stroke();
  return canvas.toDataURL()
  /* console.log('<img src="' + canvas.toDataURL() + '" />'); */
}  

exports.draw = draw;
