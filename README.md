# Strings & Conditionals

- [Reminders](#reminders)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Setup](#setup)
  - [A Note On Console Logging](#a-note-on-console-logging)
- [From Scratch Questions](#from-scratch-questions)
  - [Question 1: measureRain](#question-1-measurerain)
  - [Question 2: happyBirthdayPet](#question-2-happybirthdaypet)
  - [Question 3: funTypes](#question-3-funtypes)
  - [Question 4: rounder](#question-4-rounder)
  - [Question 5: formatName](#question-5-formatname)
  - [Question 6: extractDomain](#question-6-extractdomain)
  - [Question 7: startsWithVowel](#question-7-startswithvowel)
  - [Question 8: rotate](#question-8-rotate)
- [Modify Questions](#modify-questions)
  - [Question 9: wildlyBiasedReview](#question-9-wildlybiasedreview)
  - [Question 10: getWeatherReport](#question-10-getweatherreport)
- [Debug Questions](#debug-questions)
  - [Question 11: coolnessGauge](#question-11-coolnessgauge)
  - [Question 12: funkoPopAddictionLevel](#question-12-funkopopaddictionlevel)
  - [Question 13: returnPositiveNegativeZero](#question-13-returnpositivenegativezero)
- [Bonus: Switch Cases!](#bonus-switch-cases)

## Reminders

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

### Be Okay With Being "Provisionally Complete"

At Marcy, we will deem an assignment as "complete" if the solution passes at least **75%** of the automated tests. 

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That’s why we encourage you to be comfortable with being **“provisionally complete.”** This means:

- Submitting your work even if it isn’t perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
npm i                   # install dependencies
git checkout -b draft   # switch to the draft branch before starting

npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

### A Note On Console Logging

Some functions in this assignment return values while others use `console.log`. Pay close attention to the instructions for each function to know which approach to use.

For functions that use `console.log`, our tests need to be a little more complicated. We'll need to `mock` the `console.log` function in order to `spy` on the arguments it's called with. 

The other big thing this does is remove your `console.log` for the purpose of debugging. You can easily get around this by using `console.info` instead. (Did you know there are other log methods? Check out [all the log options](https://www.syncfusion.com/blogs/post/11-console-methods-in-javascript-for-effective-debugging.aspx) here)

Just be *very* careful about exactly what the test cases are expecting. Return values and outputs must be perfect! `"hello there"` and `"Hello there!"` are *not* equal. 

Good luck!

## From Scratch Questions

### Question 1: measureRain
Write a function `measureRain` that takes a single argument, a number `inches`. It should return a message depending on the number of inches:
- 0 inches - `'drought'`
- less than 2 inches - `'dry'`
- less than 4 inches - `'average'`
- less than 6 inches - `'rainy'`
- 6 or more inches  - `'flood'`

### Question 2: happyBirthdayPet
Write a function `happyBirthdayPet` that takes two arguments, a string `breed` and a number `age`. It should return a message in the following situations:
- `'snake'`, any age - `'Hiss hiss!'`
- `'cat'`, less than 5 - `'Mew mew!'`
- `'cat'`, 5 or more - `'Meow meow!'`
- `'dog'`, less than 5 - `'Arf arf!'`
- `'dog'`, 5 to less than 10 - `'Woof woof!'`
- `'dog'`, 10 or more - `'Boof!'`
- If none of these conditions are met, just return a message of `'Happy birthday!'`

### Question 3: funTypes
Write a function `funTypes` that takes an argument `jsType`. The type could be one of the following: a `string`, a `number`, a `boolean`, `undefined`, `null`, an `object`, an `array`, or `NaN`. 

It should return a message in the following situations:

- any string - `"That's just some text."`
- any number - `"That's a good number."`
- a boolean - `"To bool, or not to bool?"`
- undefined - `"Nothing, but I didn't set that."`
- null - `"Nothing, and I did set that."`
- an object - `"Anybody got the key?"`
- an array - `"I order you to be indexed."`
- NaN - `"Well, now you're just showing off."`

Some of these won't work using the `typeof` operator. If you're stuck, try Googling "JavaScript how to tell if a value is of type ____".

### Question 4: rounder
Write a function `rounder` that takes two arguments: `float` and `roundingSetting`. 

* `float` will be a number with a decimal
* `roundingSetting` will be one of 3 values: `up`, `down`, or `honest`. 

`rounder` should return the `float` value rounded to an integer based on the following value of `roundingSetting`:
- if `roundingSetting` is `"up"` return the `float` rounded up
- if `roundingSetting` is `"down"` return the `float` rounded down
- if `roundingSetting` is `"honest"` return the `float` rounded to the nearest integer.

Check out which `Math` method to use for each scenario!

### Question 5: formatName
Write a function `formatName` that takes two arguments: a string `first` and a string `last`. It should return a single string with the full name where only the first letter of each name is capitalized and the rest is lowercase.

```js
formatName("john", "doe") // "John Doe"
formatName("MARY", "jane") // "Mary Jane"
formatName("MarY", "JAne") // "Mary Jane"
```

### Question 6: extractDomain
Write a function `extractDomain` that takes one argument: a string `email`. It should return the domain part from an email address (everything after the `"@"` symbol).

```js
extractDomain("user@example.com") // "example.com"
extractDomain("test@google.com") // "google.com"
extractDomain("student@marcylab.org") // "marcylab.org"
```

### Question 7: startsWithVowel
Write a function `startsWithVowel` that takes one argument: a string `str`. It should return `true` if the string starts with a vowel (a, e, i, o, u), case-insensitive, and `false` otherwise.

```js
startsWithVowel("apple") // true
startsWithVowel("banana") // false
startsWithVowel("Elephant") // true
startsWithVowel("zebra") // false
```

### Question 8: rotate
Write a function `rotate` that takes two arguments: a string `str` and a number `num`. It should "rotate" the characters of the string by moving characters from the end to the front a specified number of times and return the new string.

```js
rotate("hello", 1) // "ohell"
rotate("hello", 3) // "llohe"
rotate("world", 2) // "ldwor"
rotate("abc", 1) // "cab"
```

## Modify Questions

### Question 9: wildlyBiasedReview
In `modify.js` we have the function `wildlyBiasedReview` that's not currently using a guard clause. 

Keep the functionality the same, but use a guard clause to simplify the logic.

A **guard clause** is an `if` statement that returns before the rest of the code gets to execute. When used correctly, it can save you from having to write `else` or `else if` statements.

### Question 10: getWeatherReport
In `modify.js` we have the function `getWeatherReport` that takes an integer `temperature`. It compiles a `weatherReport` string, logs it out, then logs `"And that's your report!"`. However, it is quite repetitive. 

Can you refactor the code so that we only have to log `weatherReport` and the string `"And that's your report!"` one time each?

## Debug Questions

### Question 11: coolnessGauge
In `debug.js` we have a function called `coolnessGauge`. It's using a ternary, but it's returning the exact opposite of what we want. Can you fix it by reading what the tests expect?

### Question 12: funkoPopAddictionLevel

In `debug.js` we have the function `funkoPopAddictionLevel`. It takes an integer `numOfFunkoPops` and returns a message of support (or concern). However, no matter what, it just only ever returns "No pops? Maybe try one." or "Only a few? Keep having fun!". 

Please read the tests and make sure all the messages are returned properly. To help you understand.

> Not sure what a FunkoPop is? Just google it.

### Question 13: returnPositiveNegativeZero
Oh man, in `debug.js` someone tried getting *real* clever and chaining some ternarys together in `returnPositiveNegativeZero`. However...the logic is broken and the tests are failing. Can you fix this function and only use 1 ternary (if at all) so that the tests pass?

## Bonus: Switch Cases!
You may already be aware of [Switch Cases](https://www.w3schools.com/js/js_switch.asp) that are an alternative to `if/else` statements. If the mood strikes you try your hand at the switch versions of `measureRainSwitch` and `rounderSwitch` in `bonus-switch.js`.

To test your code, open up the `bonus-switch.spec.js` file and remove the `.skip` from each `it` test.

This is also a [good article on switch](https://javascript.info/switch) to check out.
