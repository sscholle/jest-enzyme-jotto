import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  it('returns correct letter count when there are no matching letters', () => {
    const letters = getLetterMatchCount('bones', secretWord);
    expect(letters).toBe(0);
  });
  it('returns correct letter count when there are three matching letters', () => {
    const letters = getLetterMatchCount('train', secretWord);
    expect(letters).toBe(3);
  });
  it('returns correct letter count when there are duplicate letters in the guess', () => {
    const letters = getLetterMatchCount('parka', secretWord);
    expect(letters).toBe(3);
  });

});
