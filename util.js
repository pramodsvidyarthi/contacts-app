var Util = {},
    path = require('path');

Util.getHomeDirectory = function () {
 if(process.platform === 'win32'){
 	return process.env.USERPROFILE;
 } else {
 	return process.env.HOME;
 }
}

Util.getDataPath = function () {
 if(process.platform === 'win32'){
 	return path.join(process.env.USERPROFILE, 'data.json');
 } else {
 	return path.join(process.env.HOME, 'data.json');
 }
}

module.exports = Util;	
