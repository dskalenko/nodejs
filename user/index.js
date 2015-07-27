var db = require('db');
var logger = require('../logger')(module);
function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    logger(db.getPhrase('Hello') + " " + who.name + " from " + this.name);
};
console.log("user js is require");

module.exports  = User;

/*
console.log(module);*/
