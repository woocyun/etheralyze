import { combineReducers } from 'redux';

function test(state = 'test', action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  test
});