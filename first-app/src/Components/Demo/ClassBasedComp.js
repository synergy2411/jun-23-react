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
    console.log("Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
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
      <div>
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
      </div>
    );
  }
}

export default ClassBasedComp;

let user = {
  name: "John",
};
