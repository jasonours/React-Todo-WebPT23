import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './style.scss';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

  class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todo: todo
    }
  }

  addTodo = todoName => {
    this.setState({
      todo: [...this.state.todo, { name: todoName, id: Date.now(), completed: false }]
    })
  }

  toggleTodo = todoId => {
    this.setState({
      todo: this.state.todo.map(todos => {
        if (todos.id === todoId) {
          return {
            ...todos,
            completed: !todos.completed
          }
        }
        return todos;
      })
    })
  }

  clearTodo = () => {
    this.setState({
      todo: this.state.todo.filter(todo => {
        return !todo.completed
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />          
        </div>
        <TodoList clearTodo={this.clearTodo} toggleTodo={this.toggleTodo} todo={this.state.todo} />        
      </div>
    );
  }
}

export default App;