var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

    var bufferData = "";

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      bufferData += chunk;
    });

    response.on('end', () => {
      callback(bufferData);
    });
  });
};