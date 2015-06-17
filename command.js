var Command = {},
    Contacts = require('./contact');

Command.getOperation = function(){
 return process.argv[2];
};

Command.getOperationData = function(){
 return process.argv[3];
};

Command.add = function(name, done) {
   var contact = Contacts.createContact(name);
   Contacts.saveContact(contact, done);
};

Command.find = function(name, done) {
   Contacts.findContacts(name, done);
}


module.exports = Command;
