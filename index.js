#!/usr/bin/env node

//the above line means execute the file using a node shell. The above is called as shebang. it tells using what she the program
//is to be executed with. In our case its node shell.

var command = require('./command');

var handleResult = function (err, data) {
	if(err){
		console.log('Error!');
	} else {
		console.log(data);
		console.log('OK, the command ran successfully!');
	}
}

if(process.argv[2] === 'add'){
	command.add(process.argv[3], handleResult);
} else  if(process.argv[2] === 'find') {
	command.find(process.argv[3], handleResult);
}

