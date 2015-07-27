var User = require('./user');
var db = require('db');
var logger = require('./logger')(module);
db.connect();
function run() {
    var vasya = new User("Vasya");
    var petr = new User("Petr");
    vasya.hello(petr);
    logger(db.getPhrase("Run success"));
}

if(module.parent){
    exports.run = run;
}else{
    run();
}