"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
app.use(express.static(path.join(process.cwd(), "public")));
var port = process.env.PORT || 3000;
var httpServer = http.createServer(app);
httpServer.listen(port, function () { return console.log("Listening at port:" + port); });
//# sourceMappingURL=app.js.map