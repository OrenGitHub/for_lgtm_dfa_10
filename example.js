const process = require('process');
const utils = require('utils')
var x = {};
var attribute_name = process.argv[2]
x[attribute_name] = utils.escapeHtml('http://www.github.com/?foo=шеллы');
decodeURI(x.attribute_name);
