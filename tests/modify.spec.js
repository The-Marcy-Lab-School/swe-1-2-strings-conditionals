const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const { wildlyBiasedReview, getWeatherReport } = require('../src/modify');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  it('wildlyBiasedReview - uses a guard clause', () => {
    const textContent = wildlyBiasedReview.toString();

    expect(textContent.includes('return')).toBeTruthy();
    expect(textContent.includes('if')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('wildlyBiasedReview - logs the right message based on location', () => {
    wildlyBiasedReview('NYC');
    expect(log).toHaveBeenCalledTimes(3);
    expect(log).toHaveBeenNthCalledWith(1, 'THE GREATEST CITY IN THE WORLD');
    expect(log).toHaveBeenNthCalledWith(2, 'THE CITY THAT NEVER SLEEPS');
    expect(log).toHaveBeenNthCalledWith(3, 'WOW WHAT A CITY');
    jest.clearAllMocks();
    wildlyBiasedReview('LA');
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith('Yea that place is cool I guess');
    jest.clearAllMocks();

    wildlyBiasedReview(`place_${Math.random()}`);
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith('Yea that place is cool I guess');
    jest.clearAllMocks();

    // only included to prevent automatically passing test
    // would not see this section copied in real world
    const textContent = wildlyBiasedReview.toString();
    expect(textContent.includes('return')).toBeTruthy();
    expect(textContent.includes('if')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getWeatherReport - minimizes repetition', () => {
    const textContent = getWeatherReport.toString();

    // Check that weatherReport is declared as a let variable
    expect(textContent.includes('let weatherReport')).toBeTruthy();
    expect(textContent.includes('const weatherReport')).toBeFalsy();

    // Check that weatherReport is only logged once
    const weatherReportMatches = textContent.match(/console\.log\(weatherReport\)/g);
    expect(weatherReportMatches).toHaveLength(1);

    // Check that "And that's your report!" is logged exactly once
    const reportMatches = textContent.match(/console\.log\("And that's your report!"\)/g);
    expect(reportMatches).toHaveLength(1);

    // Confirm that the function logs the right message based on a number
    const cold = "Wow, it's cold out.";
    const nice = "It's really nice!";
    const hotGross = "It's hot and gross out.";
    const report = "And that's your report!";

    getWeatherReport(100);
    expect(log).toHaveBeenNthCalledWith(1, hotGross);
    expect(log).toHaveBeenNthCalledWith(2, report);

    getWeatherReport(31);
    expect(log).toHaveBeenNthCalledWith(3, cold);
    expect(log).toHaveBeenNthCalledWith(4, report);

    getWeatherReport(71);
    expect(log).toHaveBeenNthCalledWith(5, nice);
    expect(log).toHaveBeenNthCalledWith(6, report);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
