import React from "react";
import { connect } from "react-redux";
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.incrementCount()}>+</button>
        <button onClick={() => this.props.decrementCount()}>----</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = () => {
  return {
    incrementCount,
    decrementCount,
  };
};

const TrainListWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default TrainListWithConnect;
