export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const inputNum = () =>({
  type: 'INPUT_NUM'
});
export const inputNumChange = (number) => ({
  type: 'INPUT_NUM_CHANGE',
  number
});
