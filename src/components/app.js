import React from 'react';
import TodosList from '../todo-list/todos-list';
import { todos } from '../data/todos';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React Todos</h1>
        <TodosList 
          todos={this.state.todos} 
          doneTask={this.doneTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  deleteTask (id) {
    const items = this.state.todos; 

    items.map((task, index) => {
      if (task.id == id) {
        delete this.state.todos[index]; 
      }
    });

    this.forceUpdate();

    return this; 
  }

  doneTask (id, isCompleted) {
    const items = this.state.todos; 

    items.map((task, index) => {
      if (task.id == id) {
        this.state.todos[index].isCompleted = isCompleted;
      }
    });

    this.forceUpdate();

    return this;
  }
}
