# Strings and Conditionals

Practice branching with `if` / `elif` / `else`, and working with strings.

**Practicing:** conditionals, comparison operators, strings, types

- [AI Use on This Assignment](#ai-use-on-this-assignment)
- [Setup](#setup)
- [Before You Start](#before-you-start)
- [From Scratch](#from-scratch)
  - [Question 1: `measure_rain`](#question-1-measure_rain)
  - [Question 2: `happy_birthday_pet`](#question-2-happy_birthday_pet)
  - [Question 3: `fun_types`](#question-3-fun_types)
  - [Question 4: `rounder`](#question-4-rounder)
  - [Question 5: `format_name`](#question-5-format_name)
  - [Question 6: `extract_domain`](#question-6-extract_domain)
  - [Question 7: `starts_with_vowel`](#question-7-starts_with_vowel)
  - [Question 8: `rotate`](#question-8-rotate)
- [Modify](#modify)
  - [Question 9: `wildly_biased_review`](#question-9-wildly_biased_review)
  - [Question 10: `get_weather_report`](#question-10-get_weather_report)
- [Debug](#debug)
  - [Question 11: `coolness_gauge`](#question-11-coolness_gauge)
  - [Question 12: `funko_pop_addiction_level`](#question-12-funko_pop_addiction_level)
  - [Question 13: `return_positive_negative_zero`](#question-13-return_positive_negative_zero)
- [Bonus: match statements](#bonus-match-statements)
- [Submitting](#submitting)

## AI Use on This Assignment

Use whichever mode matches where you are with this material. Both are fine,
and most people move between them as a concept clicks.

**Tutor mode.** The AI explains, questions, quizzes, and critiques, and you
write every line you submit. For this assignment that means asking it why
`elif` behaves differently from a second `if`, or having it quiz you until you
can predict what your own code will do. Ask it a hundred questions — that is
the whole point. What you do not do is ask it for the function. Paste this at
the start of a chat and it will hold for the rest of the conversation:

> You are acting as a tutor. Your job is to explain what this coding question
> is asking, clarify confusing wording, and highlight the relevant concepts I
> need to know — but do not provide the full solution or code that directly
> answers the question. Instead, rephrase the problem in simpler terms,
> identify what is being tested, and suggest what steps or thought processes
> might help. Ask me guiding questions to make sure I am thinking critically.
> Do not write the final function, algorithm, or code implementation.

**Implementer mode.** You write a specification first, the AI writes code from
it, and then you verify that code line by line. For this assignment your spec
must list every branch and the exact string each one returns. If what comes
back does more than you asked for, reject it — over-delivery is a defect, and
catching it is part of the job.

You own every line either way, and you will be asked to explain it.

## Setup

Work in `development/mod-1`. Make a draft branch before you start.

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
git checkout -b draft
```

Run `pytest` for everything, or `pytest -k rounder` for one question. Scores
land in `scores/scores.json`.

75% of tests passing counts as complete. Submit at that point even if it is
not perfect. Treat submitting as a checkpoint rather than a finish line, and
come back to improve it.

## Before You Start

Most of these questions **return** a value rather than printing one. Printing
shows a human something; returning hands the value back to your code. A
function that prints where the test expects a return will fail every time,
and the failure message will look confusing.

Two questions do print, and they say so.

## From Scratch

Write your solutions in `src/from_scratch.py`.

### Question 1: `measure_rain`

Takes a number `inches` and returns a message:

- 0 inches — `"drought"`
- less than 2 inches — `"dry"`
- less than 4 inches — `"average"`
- less than 6 inches — `"rainy"`
- 6 or more inches — `"flood"`

### Question 2: `happy_birthday_pet`

Takes a string `breed` and a number `age`, and returns a message:

- `"snake"`, any age — `"Hiss hiss!"`
- `"cat"`, less than 5 — `"Mew mew!"`
- `"cat"`, 5 or more — `"Meow meow!"`
- `"dog"`, less than 5 — `"Arf arf!"`
- `"dog"`, 5 to less than 10 — `"Woof woof!"`
- `"dog"`, 10 or more — `"Boof!"`
- anything else — `"Happy birthday!"`

### Question 3: `fun_types`

Takes a value of any type and returns a message about it:

| Type | Message |
| --- | --- |
| `str` | `"That's just some text."` |
| `int` or `float` | `"That's a good number."` |
| `bool` | `"To bool, or not to bool?"` |
| `None` | `"Nothing at all."` |
| `dict` | `"Anybody got the key?"` |
| `list` | `"I order you to be indexed."` |
| `tuple` | `"You cannot change me."` |
| `nan` | `"Well, now you're just showing off."` |

Look up `isinstance()`.

Two traps here, and the tests check both. **A `bool` is an `int` in Python**,
so `isinstance(True, int)` is `True` — order your checks accordingly. And
`nan` is a `float`, so you need `math.isnan()` to tell it apart. Yes, really.

### Question 4: `rounder`

Takes a `number` and a `setting` string, and returns the number rounded:

- `"up"` — always round up
- `"down"` — always round down
- `"honest"` — round to the nearest, with `.5` going up

Look up the `math` module. Be careful with `"honest"`: Python's built-in
`round()` does **banker's rounding**, so `round(0.5)` is `0`, not `1`.

### Question 5: `format_name`

Takes a `first` and `last` name in any mix of cases and returns them properly
capitalized.

```python
format_name("MarY", "JAne")   # "Mary Jane"
```

There is a string method that does exactly this for one word.

### Question 6: `extract_domain`

Takes an email address and returns everything after the `@`.

```python
extract_domain("user@example.com")   # "example.com"
extract_domain("simple@test")        # "test"
```

### Question 7: `starts_with_vowel`

Returns `True` if `word` starts with a vowel, `False` otherwise. Capital
letters count.

```python
starts_with_vowel("apple")     # True
starts_with_vowel("Iguana")    # True
starts_with_vowel("banana")    # False
```

### Question 8: `rotate`

Takes a string and a number, and returns the string with that many characters
moved from the end to the front.

```python
rotate("hello", 1)    # "ohell"
rotate("hello", 3)    # "llohe"
rotate("xyz", 3)      # "xyz"
rotate("test", 0)     # "test"
```

Slicing makes this short. Watch what happens when the amount equals the length
of the string.

## Modify

Change the two functions already in `src/modify.py`.

### Question 9: `wildly_biased_review`

This prints one of two reviews depending on the location. Rewrite it as a
**guard clause**. Handle the boring case first and `return` early, so the NYC
case runs without an `else` around it. The tests check the `else` is gone.

### Question 10: `get_weather_report`

This builds a `weather_report` string, prints it, then prints
`"And that's your report!"`. It repeats both prints in every branch.

Refactor so each of those lines appears **once**. The branches should decide
what the message *is*, not do the printing.

## Debug

### Question 11: `coolness_gauge`

`coolness_gauge` uses a conditional expression, and returns the exact opposite
of what it should. Read the tests to see which message goes with which number,
then fix it.

### Question 12: `funko_pop_addiction_level`

This takes a number of Funko Pops and returns a message of support, or
concern. No matter what you pass it, it only ever returns the first two
messages.

Work out why the later branches are unreachable, then fix the order so every
message can come back.

> Not sure what a Funko Pop is? Just google it.

### Question 13: `return_positive_negative_zero`

Someone got *real* clever here and chained conditional expressions together.
The logic is backwards and it is hard to read.

Fix the logic, and unnest it. The tests check that no single line contains
more than one inline `if`.

## Bonus: match statements

Not scored. Do them anyway.

Python 3.10 added the `match` statement, which is a tidier way to write a long
chain of comparisons against one value. Rewrite two earlier questions with it
in `src/bonus_match.py`, then remove the `@pytest.mark.skip` lines in
`tests/test_bonus_match.py` to check your work.

- `measure_rain_match` — same rules as question 1
- `rounder_match` — same rules as question 4

`match` is at its best comparing one value against fixed options, so one of
these will fit it far better than the other. Notice which.

## Submitting

```sh
git add -A
git commit -m "your message"
git push
```

Open a pull request to your instructor for feedback.
