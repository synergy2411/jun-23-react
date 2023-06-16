import React, { useState } from "react";

const WithCounter = (WrappedComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => setCounter(counter + 1);

    return <WrappedComponent counter={counter} handleClick={handleClick} />;
  };

  //   class NewComponent extends React.Component {
  //     state = {
  //       counter: 10,
  //     };

  //     handleClick = () => this.setState({ counter: this.state.counter + 1 });

  //     render() {
  //       return (
  //         <WrappedComponent
  //           counter={this.state.counter}
  //           handleClick={this.handleClick}
  //         />
  //       );
  //     }
  //   }

  return NewComponent;
};

export default WithCounter;
