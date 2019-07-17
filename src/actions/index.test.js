import { correctGuess, actionTypes } from './index';

describe('correctGuess', () => {
  it('return an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS }); // deep equal (chai reference)
  })
})
