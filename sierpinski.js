var gm = require("gm");

gm("image.png").format(function(err, value){
  console.log(value);
})

//gm("img.png")
//  .drawPoint(100, 200)
//  .write('out.png')
