var https = require('https');

function getAndPrintHTML (options) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    var bufferData;

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      bufferData += chunk;
    });

    response.on('end', function() {
      console.log(bufferData);;
    });
  })
}

getAndPrintHTML();