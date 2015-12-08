var opener = require('opener');
process.on('uncaughtException', function (err) {
    var url = 'https://www.google.com/#q=' + encodeURIComponent(err);
    opener(url);
});
