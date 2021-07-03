import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">TODO</h3>

        <form onSubmit={this.handleSubmit}>
          <label className="text-secondary" htmlFor="new-todo">
            what to do ?
          </label>
          <div className="d-flex">
            <input
              placeholder="Add task"
              className="form-control"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className="btn btn-primary">Add task</button>
          </div>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={item.id}
          >
            {item.text}{" "}
            <button
              onClick={(e) => e.target.parentElement.remove()}
              className="btn btn-danger"
            >
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;
