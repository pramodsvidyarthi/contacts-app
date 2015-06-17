var Contact = {},
    jf = require('jsonfile'),
    location = require('./util').getDataPath();

Contact.parseName = function (str){
  return str.split(',')[0];
};

Contact.parseNumber = function (str){
  return str.split(',')[1];
};

Contact.createContact = function (str){
  return { 
          name:str.split(',')[0], 
          number:str.split(',')[1] 
         };
};

Contact.loadContacts = function (cb){
  jf.readFile(location, cb);
};


Contact.saveContact = function (contact, cb){
  jf.readFile(location, function(err, data){
     data.push(contact);
     jf.writeFile(location, data, cb);
  });
  
};

Contact.findContacts = function (name, cb){
  jf.readFile(location, function(err, data){
     var filtereddata = data.filter(function(val, index){return val.name === name });
     cb(err, filtereddata);
  });
};

module.exports = Contact;
