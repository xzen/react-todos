import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  doneTask () {
    var item = this.props.item;

    this.props.doneTask(item.id, ! item.isCompleted);

    return this;
  }

  deleteTask () {
    var item = this.props.item;

    this.props.deleteTask(item.id);

    return this;
  }

  isCompleted (item) {
    const style = {
      'background': 'green',
      'textDecoration': 'line-through'
    };

    return (
      <tr>
        <td style={style}>{item.task}</td>
        <td>
          <button onClick={this.doneTask.bind(this)}>Done</button>
          <button onClick={this.deleteTask.bind(this)}>Delete</button>
          <button>Modify</button>
        </td>
      </tr>
    );
  }

  render () {
    var item = this.props.item;

    if (item.isCompleted) {
      return this.isCompleted(item);
    }

    return (
      <tr>
        <td>{item.task}</td>
        <td>
          <button onClick={this.doneTask.bind(this)}>Done</button>
          <button onClick={this.deleteTask.bind(this)}>Delete</button>
          <button>Modify</button>
        </td>
      </tr>
    );
  }
}
