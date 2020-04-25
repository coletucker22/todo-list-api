var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API",
    }
   
];

app.get('/api/todos', function (req, res) {
    res.send(todoList)
})

app.get('/api/todos/:id', function (req, res) {
    var todoItem = todoListFind(todoList, req.params.id)
    res.send(todoItem)
})

function todoListFind(list, param) {
    return list.filter((item) => {
      if (item.id == param) {
        return item;
      }
    });
  }

app.post('/api/todos', function (req, res) {
    res.send(todoList)
})

app.post('/api/todos/:id', function (req, res) {
    var todoItem = todoListFind(todoList, req.params.id)
    res.send(todoItem)
})

function todoListFind(list, param) {
    return list.filter((item) => {
        if (item.id == param) {
            return item;
        }
    })
}

app.delete('/api/todos/:id', function (req, res) {
    var todoItem = todoListFind(todoList, req.params.id)
    res.send(todoList)
})

function todoListFind(list, param) {
    return list.filter((item) => {
        if (item.id == param) {
            return item;
        }
    })
}

// GET /api/todos

// GET /api/todos/:id

// POST /api/todos

// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})