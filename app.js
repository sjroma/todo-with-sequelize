const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const todoList = [
  {"listItem": "Learn Node basics"},
  {"listItem": "Learn Express basics"},
  {"listItem": "Learn Mustache"},
  {"listItem": "Learn HTML forms with Express"},
  {"listItem": "Learn about authentication"},
  {"listItem": "Learn how to connect to PostgreSQL"},
  {"listItem": "Learn how to create databases"},
  {"listItem": "Learn SQL"},
  {"listItem": "Learn how to connect to PostgreSQL from Node"},
  {"listItem": "Learn how to use Sequelize"}
];
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('./public'));  //so it will use the css file I created

//Listening on root
app.get('/', function (req, res) {
//  res.send('check out localhost:3000/todo'); //if user doesn't know about todo this will direct them
    res.redirect('/todo/')
});

app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.render('todo', {todoList})  //'todo' is the to.mustache file (bastardized html)
  // {todoList} is a reference to the todoList constant defined on line 4
  // console.log(todoList);
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})