import { Component } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { increment } from "../../store/Counter/counter-slice";

class ClassBased extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const dispatch = useDispatch();

    // const counter = useSelector((store) => store.counterReducer.value);

    return (
      <div>
        <h1>Class Based component loaded</h1>
        <p> Counter : {this.props.counter}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.props.increaseCounter()}
        >
          Increase Counter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    counter: store.counterReducer.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increment()),
  };
};

// const enhancedComponent = connect(mapStateToProps, mapDispatchToProps);

// export default enhancedComponent(ClassBased);

export default connect(mapStateToProps, mapDispatchToProps)(ClassBased);
