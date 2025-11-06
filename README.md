# JavaScript Classes Learning Exercise

## Overview

This exercise will help you understand JavaScript classes through hands-on practice. You'll build a simple application that uses classes to model real-world objects.

## Learning Objectives

By the end of this exercise, you will understand:

- How to define and create classes
- How to use constructors to initialize objects
- How to add methods to classes
- How to use inheritance (extends and super)
- How to create static methods
- How to use getters and setters

## Exercise: Building a Library Management System

You'll create a simple library management system with the following classes:

1. **Book** - Represents a book with title, author, and ISBN
2. **Library** - Manages a collection of books
3. **Member** - Represents a library member who can borrow books

## Instructions

1. Open `exercise.js` and complete all the TODO sections
2. Test your code by running `node exercise.js`
3. Check `solution.js` if you get stuck (but try to solve it yourself first!)

## Tasks

### Part 1: Book Class

- Create a `Book` class with a constructor that takes `title`, `author`, and `isbn`
- Add a method `getInfo()` that returns a formatted string with book details
- Add a getter `isAvailable` that returns `true` (we'll make this dynamic later)

### Part 2: Library Class

- Create a `Library` class with a constructor that initializes an empty books array
- Add a method `addBook(book)` to add a book to the library
- Add a method `removeBook(isbn)` to remove a book by ISBN
- Add a method `findBook(isbn)` that returns the book or null if not found
- Add a method `listAllBooks()` that returns all books

### Part 3: Member Class

- Create a `Member` class with a constructor that takes `name` and `memberId`
- Add a property `borrowedBooks` initialized as an empty array
- Add a method `borrowBook(library, isbn)` that:
  - Finds the book in the library
  - Adds it to borrowedBooks
  - Removes it from the library
- Add a method `returnBook(library, isbn)` that:
  - Removes the book from borrowedBooks
  - Adds it back to the library

### Part 4: Inheritance

- Create a `PremiumMember` class that extends `Member`
- Override the `borrowBook` method to allow borrowing up to 5 books (instead of the default 3)
- Add a static method `getMaxBooks()` that returns the maximum for premium members

### Part 5: Static Methods

- Add a static method `createRandomBook()` to the Book class that generates a random book
- Add a static method `getLibraryStats()` to the Library class that returns statistics

## Tips

- Remember to use `this` to refer to instance properties
- Use `super()` when calling parent class constructors
- Static methods are called on the class itself, not instances
- Getters are accessed like properties (no parentheses)

Good luck! 🚀
