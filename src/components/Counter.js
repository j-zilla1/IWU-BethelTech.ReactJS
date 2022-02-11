import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumChange, numInputted, onInputNum, clicked }) => {

    return (
      <div>
        <div>
          <button onClick={ onDecrement }>-</button>
          <span>{count}</span>
          <button onClick={ onIncrement}>+</button>
          <br/>
          <h4>Times the increment/decrement buttons have been clicked: {clicked}  </h4>
          <input type="text" onChange={event => onInputNumChange(event.target.value)} value ={numInputted}/>
          <button onClick={onInputNum}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;