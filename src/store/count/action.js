export const countActionTypes = {
  ADD: 'ADD',
};

export const addCounts = () => dispatch => {
  return dispatch({ type: countActionTypes.ADD });
};
