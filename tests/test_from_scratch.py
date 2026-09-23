import math

from from_scratch import (
    extract_domain,
    format_name,
    fun_types,
    happy_birthday_pet,
    measure_rain,
    rotate,
    rounder,
    starts_with_vowel,
)

TEST_SUITE_NAME = "From Scratch Tests"


def test_measure_rain():
    """measure_rain - returns the right message based on rain amount"""
    assert measure_rain(0) == "drought"
    assert measure_rain(1) == "dry"
    assert measure_rain(2) == "average"
    assert measure_rain(3) == "average"
    assert measure_rain(4) == "rainy"
    assert measure_rain(5) == "rainy"
    assert measure_rain(6) == "flood"
    assert measure_rain(7) == "flood"
    assert measure_rain(10) == "flood"


def test_happy_birthday_pet():
    """happy_birthday_pet - returns the right message based on breed and age"""
    snake = "snake"  # these string constants prevent typos
    cat = "cat"
    dog = "dog"

    assert happy_birthday_pet(snake, 0) == "Hiss hiss!"
    assert happy_birthday_pet(snake, 4) == "Hiss hiss!"
    assert happy_birthday_pet(cat, 2) == "Mew mew!"
    assert happy_birthday_pet(cat, 5) == "Meow meow!"
    assert happy_birthday_pet(cat, 10) == "Meow meow!"
    assert happy_birthday_pet(dog, 4) == "Arf arf!"
    assert happy_birthday_pet(dog, 5) == "Woof woof!"
    assert happy_birthday_pet(dog, 9) == "Woof woof!"
    assert happy_birthday_pet(dog, 10) == "Boof!"
    assert happy_birthday_pet(dog, 11) == "Boof!"
    assert happy_birthday_pet("bird", 1) == "Happy birthday!"
    assert happy_birthday_pet("racoon", 5) == "Happy birthday!"


def test_fun_types():
    """fun_types - returns the right message based on type"""
    assert fun_types("string") == "That's just some text."
    assert fun_types("") == "That's just some text."
    assert fun_types(1) == "That's a good number."
    assert fun_types(0) == "That's a good number."
    assert fun_types(3.5) == "That's a good number."

    # A bool IS an int in Python, so check for it first or 1 and True collide
    assert fun_types(True) == "To bool, or not to bool?"
    assert fun_types(False) == "To bool, or not to bool?"

    assert fun_types(None) == "Nothing at all."
    assert fun_types({}) == "Anybody got the key?"
    assert fun_types([]) == "I order you to be indexed."
    assert fun_types(()) == "You cannot change me."
    assert fun_types(float("nan")) == "Well, now you're just showing off."


def test_rounder():
    """rounder - returns the right number based on rounding setting"""
    assert rounder(1.0, "up") == 1
    assert rounder(1.1, "up") == 2
    assert rounder(3.9, "up") == 4
    assert rounder(1.9, "down") == 1
    assert rounder(5.0, "down") == 5
    assert rounder(5.1, "down") == 5
    assert rounder(1.9, "honest") == 2
    assert rounder(1.5, "honest") == 2
    assert rounder(1.4, "honest") == 1
    assert rounder(1.0, "honest") == 1


def test_format_name():
    """format_name - formats names with proper capitalization"""
    assert format_name("john", "doe") == "John Doe"
    assert format_name("MARY", "jane") == "Mary Jane"
    assert format_name("MarY", "JAne") == "Mary Jane"
    assert format_name("bOb", "SMITH") == "Bob Smith"
    assert format_name("a", "b") == "A B"
    assert format_name("JOHN", "DOE") == "John Doe"


def test_extract_domain():
    """extract_domain - extracts domain from email addresses"""
    assert extract_domain("user@example.com") == "example.com"
    assert extract_domain("test@google.com") == "google.com"
    assert extract_domain("student@marcylab.org") == "marcylab.org"
    assert extract_domain("admin@company.co.uk") == "company.co.uk"
    assert extract_domain("simple@test") == "test"


def test_starts_with_vowel():
    """starts_with_vowel - checks if string starts with vowel"""
    assert starts_with_vowel("apple") is True
    assert starts_with_vowel("banana") is False
    assert starts_with_vowel("Elephant") is True
    assert starts_with_vowel("orange") is True
    assert starts_with_vowel("zebra") is False
    assert starts_with_vowel("umbrella") is True
    assert starts_with_vowel("cat") is False
    assert starts_with_vowel("Iguana") is True


def test_rotate():
    """rotate - rotates string characters by specified amount"""
    assert rotate("hello", 1) == "ohell"
    assert rotate("hello", 3) == "llohe"
    assert rotate("world", 2) == "ldwor"
    assert rotate("abc", 1) == "cab"
    assert rotate("xyz", 3) == "xyz"
    assert rotate("test", 0) == "test"
    assert rotate("rotate", 4) == "tatero"
