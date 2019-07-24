import moxios from 'moxios';
import { storeFactory } from 'utils';
import { getSecretWord } from 'actions';

describe('get secret word', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  // Test Async Action Creator
  // create store
  // disptch will return promise
  // .then of the promise will contain the tests
  it('add response to word state', () => {
    const secretWord = 'party';
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      });
  });
});
