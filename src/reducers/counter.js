const initialState = {
  count: 0,
  numInputted: 0,
  clicked: 0
  
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicked: state.clicked + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicked: state.clicked + 1
      };
    
    case 'INPUT_NUM':
      return {
        ...state,
        count: parseInt(state.numInputted),
        numInputted: null
        
      };
    case 'INPUT_NUM_CHANGE':
      return {
        ...state,
        numInputted: action.number
        
      };
    default:
      return state;
  }
}

export default counterReducer;