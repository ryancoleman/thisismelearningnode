var gm = require("gm");

gm("img.png")
  .drawPoint(100, 200)
  .write(dir + 'img.png', function(err){
    if (err) return console.dir(arguments)
    console.log(this.outname + ' created  :: ' + arguments[3])
  }
}
