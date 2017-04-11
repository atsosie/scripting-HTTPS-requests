var https = require('https');

function getHTML (options, callback) {

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
}

function printHTML (html) {
  return console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);