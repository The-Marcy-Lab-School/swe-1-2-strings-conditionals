const path = require('path');
const ScoreCounter = require('score-tests');
const {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('measureRain - returns the right message based on rain amount', () => {
    expect(measureRain(0)).toBe('drought');
    expect(measureRain(1)).toBe('dry');
    expect(measureRain(2)).toBe('average');
    expect(measureRain(3)).toBe('average');
    expect(measureRain(4)).toBe('rainy');
    expect(measureRain(5)).toBe('rainy');
    expect(measureRain(6)).toBe('flood');
    expect(measureRain(7)).toBe('flood');
    expect(measureRain(10)).toBe('flood');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('happyBirthdayPet - returns the right message based on breed and age', () => {
    const snake = 'snake'; // these string constants prevent typos
    const cat = 'cat';
    const dog = 'dog';

    expect(happyBirthdayPet(snake, 0)).toBe('Hiss hiss!');
    expect(happyBirthdayPet(snake, 4)).toBe('Hiss hiss!');
    expect(happyBirthdayPet(cat, 2)).toBe('Mew mew!');
    expect(happyBirthdayPet(cat, 5)).toBe('Meow meow!');
    expect(happyBirthdayPet(cat, 10)).toBe('Meow meow!');
    expect(happyBirthdayPet(dog, 4)).toBe('Arf arf!');
    expect(happyBirthdayPet(dog, 5)).toBe('Woof woof!');
    expect(happyBirthdayPet(dog, 9)).toBe('Woof woof!');
    expect(happyBirthdayPet(dog, 10)).toBe('Boof!');
    expect(happyBirthdayPet(dog, 11)).toBe('Boof!');
    expect(happyBirthdayPet('bird', 1)).toBe('Happy birthday!');
    expect(happyBirthdayPet('racoon', 5)).toBe('Happy birthday!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('funTypes - returns the right message based on type', () => {
    expect(funTypes('string')).toBe("That's just some text.");
    expect(funTypes('')).toBe("That's just some text.");
    expect(funTypes(1)).toBe("That's a good number.");
    expect(funTypes(0)).toBe("That's a good number.");
    expect(funTypes(true)).toBe('To bool, or not to bool?');
    expect(funTypes(false)).toBe('To bool, or not to bool?');
    expect(funTypes(undefined)).toBe("Nothing, but I didn't set that.");
    expect(funTypes(null)).toBe('Nothing, and I did set that.');
    expect(funTypes({})).toBe('Anybody got the key?');
    expect(funTypes([])).toBe('I order you to be indexed.');
    expect(funTypes(NaN)).toBe("Well, now you're just showing off.");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('rounder - returns the right number based on rounding setting', () => {
    expect(rounder(1.0, 'up')).toBe(1);
    expect(rounder(1.1, 'up')).toBe(2);
    expect(rounder(3.9, 'up')).toBe(4);
    expect(rounder(1.9, 'down')).toBe(1);
    expect(rounder(5.0, 'down')).toBe(5);
    expect(rounder(5.1, 'down')).toBe(5);
    expect(rounder(1.9, 'honest')).toBe(2);
    expect(rounder(1.5, 'honest')).toBe(2);
    expect(rounder(1.4, 'honest')).toBe(1);
    expect(rounder(1.0, 'honest')).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('formatName - formats names with proper capitalization', () => {
    expect(formatName('john', 'doe')).toBe('John Doe');
    expect(formatName('MARY', 'jane')).toBe('Mary Jane');
    expect(formatName('MarY', 'JAne')).toBe('Mary Jane');
    expect(formatName('bOb', 'SMITH')).toBe('Bob Smith');
    expect(formatName('a', 'b')).toBe('A B');
    expect(formatName('JOHN', 'DOE')).toBe('John Doe');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('extractDomain - extracts domain from email addresses', () => {
    expect(extractDomain('user@example.com')).toBe('example.com');
    expect(extractDomain('test@google.com')).toBe('google.com');
    expect(extractDomain('student@marcylab.org')).toBe('marcylab.org');
    expect(extractDomain('admin@company.co.uk')).toBe('company.co.uk');
    expect(extractDomain('simple@test')).toBe('test');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('startsWithVowel - checks if string starts with vowel', () => {
    expect(startsWithVowel('apple')).toBe(true);
    expect(startsWithVowel('banana')).toBe(false);
    expect(startsWithVowel('Elephant')).toBe(true);
    expect(startsWithVowel('orange')).toBe(true);
    expect(startsWithVowel('zebra')).toBe(false);
    expect(startsWithVowel('umbrella')).toBe(true);
    expect(startsWithVowel('cat')).toBe(false);
    expect(startsWithVowel('Iguana')).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('rotate - rotates string characters by specified amount', () => {
    expect(rotate('hello', 1)).toBe('ohell');
    expect(rotate('hello', 3)).toBe('llohe');
    expect(rotate('world', 2)).toBe('ldwor');
    expect(rotate('abc', 1)).toBe('cab');
    expect(rotate('xyz', 3)).toBe('xyz');
    expect(rotate('test', 0)).toBe('test');
    expect(rotate('rotate', 4)).toBe('tatero');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
