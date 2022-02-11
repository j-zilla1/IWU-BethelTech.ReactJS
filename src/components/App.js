import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement,inputNumChange, inputNum  } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        {/* Define states and functions here */}
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputNum={this.props.onInputNum} onInputNumChange={this.props.onInputNumChange} clicked={this.props.clicked} />
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNum: () => dispatch(inputNum()),
    onInputNumChange: (number) => dispatch(inputNumChange(number))
    
    
  };
}
//matches with counter.js
function mapStateToProps(state) {
    return {
      count: state.count,
      numInputted: state.numInputted,
      clicked: state.clicked
      
     
      
      
      
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);