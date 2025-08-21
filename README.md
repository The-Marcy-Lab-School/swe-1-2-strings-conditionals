# 1.0.2 - Flow Control and Math

- [Get Set Up](#get-set-up)
- [Before you start](#before-you-start)
- [Questions](#questions)
  - [Question 1: measureRain](#question-1-measurerain)
  - [Question 2: happyBirthdayPet](#question-2-happybirthdaypet)
  - [Question 3: funTypes](#question-3-funtypes)
  - [Question 4: rounder](#question-4-rounder)
  - [Question 5: formatName](#question-5-formatname)
  - [Question 6: extractDomain](#question-6-extractdomain)
  - [Question 7: startsWithVowel](#question-7-startswithvowel)
  - [Question 8: rotate](#question-8-rotate)
  - [Question 9: MODIFY - wildlyBiasedReview](#question-9-modify---wildlybiasedreview)
  - [Question 10: MODIFY - Fix getWeatherReport](#question-10-modify---fix-getweatherreport)
  - [Question 11: DEBUG - Fix coolnessGauge](#question-11-debug---fix-coolnessgauge)
  - [Question 12: DEBUG - Fix funkoPopAddictionLevel](#question-12-debug---fix-funkopopaddictionlevel)
  - [Question 13: DEBUG - fix returnPositiveNegativeZero](#question-13-debug---fix-returnpositivenegativezero)
  - [Bonus: Switch Cases!](#bonus-switch-cases)

## Get Set Up

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

## Before you start
Some functions in this assignment return values while others use `console.log`. Pay close attention to the instructions for each function to know which approach to use.

For functions that use `console.log`, our tests need to be a little more complicated. We'll need to `mock` the `console.log` function in order to `spy` on the arguments it's called with. 

The other big thing this does is remove your `console.log` for the purpose of debugging. You can easily get around this by using `console.info` instead. (Did you know there are other log methods? Check out [all the log options](https://www.syncfusion.com/blogs/post/11-console-methods-in-javascript-for-effective-debugging.aspx) here)

Just be *very* careful about exactly what the test cases are expecting. Return values and outputs must be perfect! "hello there" and "Hello there!" are *not* equal. And if you're confused about what a question is asking for, check what the tests literally expect. We've included a `playground.js` file and script, don't forget to install and test frequently!

Good luck!

## Questions

### Question 1: measureRain
Write a function `measureRain` that takes a single argument, a number `inches`. It should return a message depending on the number of inches:
- 0 inches - 'drought'
- less than 2 inches - 'dry'
- less than 4 inches - 'average'
- less than 6 inches - 'rainy'
- 6 or more inches  - 'flood'

### Question 2: happyBirthdayPet
Write a function `happyBirthdayPet` that takes two arguments, a string `breed` and a number `age`. It should return a message in the following situations:
- 'snake', any age - `'Hiss hiss!'`
- 'cat', less than 5 - `'Mew mew!'`
- 'cat', 5 or more - `'Meow meow!'`
- 'dog', less than 5 - `'Arf arf!'`
- 'dog', 5 to less than 10 - `'Woof woof!'`
- 'dog', 10 or more - `'Boof!'`
- If none of these conditions are met, just return a message of `'Happy birthday!'`

### Question 3: funTypes
Write a function `funTypes` that takes an argument `jsType`. The type could be one of the following: a `string`, a `number`, a `boolean`, `undefined`, `null`, an `object`, an `array`, or `NaN`. It should return a message in the following situations:

- any string - "That's just some text."
- any number - "That's a good number."
- a boolean - "To bool, or not to bool?"
- undefined - "Nothing, but I didn't set that."
- null - "Nothing, and I did set that."
- an object - "Anybody got the key?"
- an array - "I order you to be indexed."
- NaN - "Well, now you're just showing off."

Some of these won't work using the `typeof` operator. If you're stuck, try Googling "how to tell if a value is of type ____ JavaScript".

### Question 4: rounder
Write a function `rounder` that takes two arguments: a decimal number `float` and a string `roundingSetting`. `roundingSetting` could be only one of 3 values `up`, `down`, or `honest`. It should *RETURN* an integer based on the following value of `roundingSetting`:
- up - the `float` rounded up
- down - the `float` rounded down
- honest - the `float` rounded up or down depending on the rounding rules (numbers less than .5 round down, numbers greater than or equal to .5 round up)

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

### Question 9: MODIFY - wildlyBiasedReview
In `modify.js` we have the function `wildlyBiasedReview` that's not currently using a guard clause. 

Keep the functionality the same, but use a guard clause to simplify the logic.

A **guard clause** is an `if` statement that returns before the rest of the code gets to execute. When used correctly, it can save you from having to write `else` or `else if` statements.

### Question 10: MODIFY - Fix getWeatherReport
In `modify.js` we have the function `getWeatherReport` that takes an integer `temperature`. It compiles a `weatherReport` string, logs it out, then logs `"And that's your report!"`. However, it is quite repetitive. 

Can you refactor the code so that we only have to log `weatherReport` and the string `"And that's your report!"` one time each?

### Question 11: DEBUG - Fix coolnessGauge
In `debug.js` we have a function called `coolnessGauge`. It's using a ternary, but it's returning the exact opposite of what we want. Can you fix it by reading what the tests expect?

### Question 12: DEBUG - Fix funkoPopAddictionLevel

In `debug.js` we have the function `funkoPopAddictionLevel`. It takes an integer `numOfFunkoPops` and returns a message of support (or concern). However, no matter what, it just only ever returns "No pops? Maybe try one." or "Only a few? Keep having fun!". 

Please read the tests and make sure all the messages are returned properly. To help you understand.

> Not sure what a FunkoPop is? Just google it.

### Question 13: DEBUG - fix returnPositiveNegativeZero
Oh man, in `debug.js` someone tried getting *real* clever and chaining some ternarys together in `returnPositiveNegativeZero`. However...the logic is broken and the tests are failing. Can you fix this function and only use 1 ternary (if at all) so that the tests pass?

### Bonus: Switch Cases!
You may already be aware of [Switch Cases](https://www.w3schools.com/js/js_switch.asp) that are an alternative to `if/else` statements. If the mood strikes you try your hand at the switch versions of `measureRainSwitch` and `rounderSwitch` in `bonus-switch.js`.

To test your code, open up the `bonus-switch.spec.js` file and remove  the `.skip` from each `it` test.

This is also a [good article on switch](https://javascript.info/switch) to check out.
