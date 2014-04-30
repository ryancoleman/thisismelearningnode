var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var sierpinski = require("./sierpinski");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/favicon.ico"] = requestHandlers.favicon;
handle["/sierpinski"] = sierpinski.draw;

server.start(router.route, handle);
