var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);