import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('test default initial state of `false` when no action is dispatched', () => {
  const newState = successReducer();
  expect(newState).toBe(false);
});

test('return state of `true` when action `CORRECT_GUESS` is dispatched', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
