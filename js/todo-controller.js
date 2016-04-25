/**
 * Created by boyoung on 4/24/16.
 */
angular.module('ToDoApp', [])
.controller('TodoController', function(){
  var seedData = [
    {"title": "Use directive to have cleaner, readable index.html", "done": false},
    {"title": "Redo form button css", "done": false},
    {"title": "Should be able to add new item to the list", "done": false},
    {"title": "Have clear completed items button", "done": false},
    {"title": "Clean up unused js, css file", "done": false},
    {"title": "Store data in html5 local storage", "done": false}
  ];

  this.today = new Date();
  this.saved = localStorage.getItem('todos');
  this.list = (this.saved !== null) ? JSON.parse(this.saved) : seedData;
  this.todoCount = function(){
    var count = 0;
    var message;
    this.list.map(function (val){
      if (val.done === false) {
        count++;
      }
    });

    if(count === 0){
      message = "All done!";
    }else if(count === 1){
      message = "Only " + count + " item left.";
    }else{
      message = "Only " + count + " items left.";
    }

    return message;
  };

  this.addTodo = function(){
    this.list.push({"title": this.newtodo, "done": false});
    this.newtodo = "";
    localStorage.setItem('todos', JSON.stringify(this.list));
  };

  this.clearCompleted = function(){
    var oldlist = this.list;
    var newlist = [];

    oldlist.map(function(val){
      if(val.done === false){
        newlist.push(val);
      }
    });

    this.list = newlist;
    localStorage.setItem('todos', JSON.stringify(this.list));
  };
});