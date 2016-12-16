import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems (items) {
    return items.map((item, index) => (
      <TodosListItem 
        key={index}
        item={item}
        doneTask={this.props.doneTask}
        deleteTask={this.props.deleteTask}
      />
    ));
  }

  render() {
    const tasks = this.renderItems(this.props.todos);

    return (
      <table>
        <TodosListHeader />
        <tbody>
          { tasks }
        </tbody>
      </table> 
    );
  }
}
