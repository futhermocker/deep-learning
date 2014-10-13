var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect()

app.use(serveStatic(__dirname));
app.listen(8080)
// just serve local files
// connect.createServer(
//     connect.static(__dirname)
// ).listen(8080);
