var express = require('express');
var path = require('path');
var app = express();
var rootpah = path.normalize(__dirname + '/../');

app.use(express.static(rootpah + '/app'));

app.listen(8000);
console.log('listen on port 8000...');