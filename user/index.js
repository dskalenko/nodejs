var words = require('./ru');
function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log(words.Hello + " " + who.name + " from " + this.name);
};
console.log("user js is require");

exports.User = User;