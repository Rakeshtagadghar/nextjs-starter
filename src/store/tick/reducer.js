import { tickActionTypes } from './action';

const tickInitialState = {
  lastUpdate: 0,
  light: false,
};

export default function reducer(state = tickInitialState, action) {
  switch (action.type) {
    case tickActionTypes.TICK:
      return { ...state, lastUpdate: action.ts, light: !!action.light };
    default:
      return state;
  }
}
