var Contact = require('./contact'),
    command = require('./command'),
    util = require('./util');

var contacts = { name: "John Smith", number: "604-123-9090" };

var name = Contact.parseName("John Smith,604-123-9090");
var number = Contact.parseNumber("John Smith,604-123-9090");
var contact = Contact.createContact("John Smith,604-123-9090");

//console.log(contact);


//Contact.loadContacts(function(err, data){
// console.log(data);
//});

//Contact.saveContacts(contacts, function(err){
 //console.log('success');
//});


//console.log(command.getOperation());
//console.log(command.getOperationData());

//command.add(function(err){
// console.log('Contact added!');
//});

// command.find(function(err, results) {
//   console.log(results);
//   console.log('Find complete!')
// });

var home = util.getDataPath();
console.log(home);