/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {

    this.todosList = [];

  }

  add(todo) {

    this.todosList.push(todo);

  }

  remove(indexOfTodo) {
    if(indexOfTodo >=this.todosList.length)
      return ;

    this.todosList.splice(indexOfTodo, 1);

  }

  update(indexOfTodo, updatedTodo) {

    if(indexOfTodo >=this.todosList.length)
      return ;
    this.todosList.splice(indexOfTodo, 1, updatedTodo);

  }

  getAll() {

    return this.todosList;

  }

  get(indexOfTodo) {
    if(indexOfTodo >=this.todosList.length)
      return null;

    return this.todosList[indexOfTodo];

  }

  clear() {

    this.todosList = [];

  }

}

 

module.exports = Todo;
