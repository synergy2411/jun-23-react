import { Component, PureComponent } from "react";

// Container / Stateful Component

class ClassBasedComp extends Component {
  constructor(props) {
    super(props);

    console.log("Constructor");

    this.state = {
      counter: 0,
      result: [],
      todos: [],
    };
  }

  onIncrease = () => this.setState({ counter: this.state.counter + 1 });

  onStoreResult = () => {
    this.setState({
      result: [this.state.counter, ...this.state.result],
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ todos: todos });
      })
      .catch((err) => console.error(err));

    console.log("Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
    this.setState({
      counter: 0,
      result: [],
      todos: [],
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("PROPS : ", nextProps);
    // console.log("STATE : ", nextState);
    console.log("Should Component Update");
    const rnd = Math.round(Math.random() * 100);
    // console.log(rnd);
    return rnd > 60;
    // return nextProps.username !== this.props.username;
  }

  render() {
    console.log("Render");
    return (
      <div className="container">
        <h2>Class based component loaded - {this.props.username}</h2>

        <p className="display-4">Counter : {this.state.counter}</p>
        <button className="btn btn-primary" onClick={this.onIncrease}>
          Increase
        </button>
        <button className="btn btn-success" onClick={this.onStoreResult}>
          Store
        </button>
        <hr />
        <ul>
          {this.state.result.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <hr />
        {this.state.todos.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ClassBasedComp;

let user = {
  name: "John",
};
