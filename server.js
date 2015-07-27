var user = require('./user');
var vasya = new user.User("Vasya");
var petr = new  user.User("Petr");
vasya.hello(petr);