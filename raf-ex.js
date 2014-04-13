var raf = require('raf')
var hypotrochoid = require('hypotrochoid')

var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')
var output = []
var width
var height

var radii = [
  Math.random() * 190 + 10,
  Math.random() * 190 + 10,
  Math.random() * 190 + 10,
  Math.random() * 190 + 10,
  Math.random() * 190 + 10,
  Math.random() * 190 + 10
]

var options = {
  'Size': 30 + Math.random() * 60,
  'Undulate': true
}

document.body.style.background = '#000'
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.appendChild(canvas)

function draw() {
  var h = options['Size']

  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, width, height)
  ctx.save()
  ctx.translate(width/2, height/2)

  ctx.globalCompositeOperation = 'lighter'
  ctx.strokeStyle = 'rgba(205,255,215,0.25)'
  ctx.beginPath()

  hypotrochoid(h, radii, 0, output)
  ctx.moveTo(output[0], output[1])
  for (var i = 0; i < 40000; i += 2.5) {
    hypotrochoid(h, radii, i * Math.PI / 200, output)
    ctx.lineTo(output[0], output[1])
  }

  ctx.stroke()
  ctx.restore()
}


function resize() {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
  draw()
}

// bind resize function
window.onresize = resize
resize()

raf(canvas).on('data', function() {
  if (!options.Undulate) return
  var now = Date.now ? Date.now() : +new Date

  for (var i = 0, l = radii.length; i < l; i += 1) {
    radii[i] += Math.sin((now - i * 5000) * 0.0001 * Math.sin(i / 1.3)) * 0.0025
    options.Size += Math.sin((now + 5000) * 0.00008) * 0.025
  }

  draw()
})
