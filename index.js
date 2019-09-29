'use strict';

let fs = require('fs');
let path = require('path');

exports.servePage = function (event, context, callback) {
    let resourcePath = event["resource"];

    // Permit root resource
    if (resourcePath === undefined || resourcePath === "/") {
        resourcePath = "/index.html"
    }
    let contents = fs.readFileSync(`public${path.sep}${resourcePath}`);
    let body = contents.toString();

    let result = {
        statusCode: 200,
        body: body,
        headers: {'content-type': 'text/html'}
    };

    callback(null, result);
};
