const path = require('path');
const ScoreCounter = require('score-tests');
const {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
} = require('../src/debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('coolnessGauge - returns the right message based on a number', () => {
    /*
    For these tests, we expect coolnessGauage to RETURN the values inside of `toBe()`
    */
    expect(coolnessGauge(0)).toBe('You need more fridges.');
    expect(coolnessGauge(1)).toBe('You need more fridges.');
    expect(coolnessGauge(2)).toBe('You need more fridges.');
    expect(coolnessGauge(3)).toBe('You need more fridges.');
    expect(coolnessGauge(4)).toBe('You are downright chilly!');
    expect(coolnessGauge(5)).toBe('You are downright chilly!');
    expect(coolnessGauge(6)).toBe('You are downright chilly!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('funkoPopAddictionLevel - returns the right message based on a number', () => {
    /*
    These tests are checking that funkoPopAddictionLevel returns the correct message
    based on the number of Funko Pops provided.
    */

    expect(funkoPopAddictionLevel(0)).toBe('No pops? Maybe try one.');
    expect(funkoPopAddictionLevel(1)).toBe('Only a few? Keep having fun!');
    expect(funkoPopAddictionLevel(10)).toBe('Only a few? Keep having fun!');
    expect(funkoPopAddictionLevel(11)).toBe('You have a problem.');
    expect(funkoPopAddictionLevel(20)).toBe('You have a problem.');
    expect(funkoPopAddictionLevel(21)).toBe('You need help!');
    expect(funkoPopAddictionLevel(30)).toBe('You need help!');
    expect(funkoPopAddictionLevel(31)).toBe('You need an intervention!!!');
    expect(funkoPopAddictionLevel(100)).toBe('You need an intervention!!!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('returnPositiveNegativeZero - only uses one ternary (if any)', () => {
    const textContent = returnPositiveNegativeZero.toString();
    expect(textContent.indexOf('?') === textContent.lastIndexOf('?')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('returnPositiveNegativeZero - returns the right message based on a number', () => {
    expect(returnPositiveNegativeZero(0)).toBe('Zero');
    expect(returnPositiveNegativeZero(1)).toBe('Positive');
    expect(returnPositiveNegativeZero(2)).toBe('Positive');
    expect(returnPositiveNegativeZero(-1)).toBe('Negative');
    expect(returnPositiveNegativeZero(-2)).toBe('Negative');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
