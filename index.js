/*
 * Node JS Application for the Game Werewolves 
 * Author: Jinhua Wang
 * University of Toronto
 * License: MIT
 */

 var express = require('express');
 var app = express();
 var http = require('http');
 var path = require('path');
 app.use(express.static(path.join(__dirname, 'public')));
 http.createServer(app).listen(80);

