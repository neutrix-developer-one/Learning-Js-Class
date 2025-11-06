// ============================================
// JAVASCRIPT CLASSES LEARNING EXERCISE
// ============================================
// Complete all TODO sections below
// Run this file with: node exercise.js

// ============================================
// PART 1: Book Class
// ============================================

class Book {
  // TODO: Create a constructor that takes title, author, and isbn as parameters
  // TODO: Assign these parameters to instance properties (this.title, this.author, this.isbn)
  // TODO: Create a method called getInfo() that returns a string like:
  // "Title: [title], Author: [author], ISBN: [isbn]"
  // TODO: Create a getter called isAvailable that returns true
}

// ============================================
// PART 2: Library Class
// ============================================

class Library {
  // TODO: Create a constructor that initializes an empty array called books
  // TODO: Create a method addBook(book) that adds a book to the books array
  // TODO: Create a method removeBook(isbn) that removes a book by its ISBN
  // Hint: Use array.findIndex() and array.splice() or array.filter()
  // TODO: Create a method findBook(isbn) that finds and returns a book by ISBN
  // Return null if the book is not found
  // TODO: Create a method listAllBooks() that returns the books array
  // TODO: Create a static method getLibraryStats(library) that takes a library instance
  // and returns an object with:
  // { totalBooks: number, sample: "This library has [number] books" }
}

// ============================================
// PART 3: Member Class
// ============================================

class Member {
  // TODO: Create a constructor that takes name and memberId as parameters
  // TODO: Initialize a property called borrowedBooks as an empty array
  // TODO: Create a method borrowBook(library, isbn) that:
  // 1. Finds the book in the library using library.findBook(isbn)
  // 2. Checks if the book exists and if member has less than 3 books borrowed
  // 3. If conditions are met:
  //    - Add the book to borrowedBooks array
  //    - Remove the book from the library using library.removeBook(isbn)
  //    - Return true
  // 4. If conditions are not met, return false
  // TODO: Create a method returnBook(library, isbn) that:
  // 1. Finds the book in borrowedBooks array
  // 2. If found:
  //    - Remove it from borrowedBooks array
  //    - Add it back to the library using library.addBook(book)
  //    - Return true
  // 3. If not found, return false
  // TODO: Create a method getBorrowedBooks() that returns the borrowedBooks array
}

// ============================================
// PART 4: Inheritance - PremiumMember Class
// ============================================

class PremiumMember extends Member {
  // TODO: Create a constructor that takes name and memberId
  // TODO: Call super() to initialize the parent Member class
  // TODO: Override borrowBook method to allow up to 5 books instead of 3
  // TODO: Create a static method getMaxBooks() that returns 5
}

// ============================================
// PART 5: Static Methods
// ============================================

// TODO: Add a static method createRandomBook() to the Book class
// This method should create and return a Book instance with random title, author, and ISBN
// Hint: You can use a simple counter or random number for ISBN

// ============================================
// TESTING YOUR CODE
// ============================================
// Uncomment and run these tests once you've completed the classes

/*
// Test Book Class
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5");
console.log("Book Info:", book1.getInfo());
console.log("Is Available:", book1.isAvailable);

// Test Library Class
const library = new Library();
library.addBook(book1);
library.addBook(new Book("1984", "George Orwell", "978-0-452-28423-4"));
console.log("\nAll Books:", library.listAllBooks());
console.log("Library Stats:", Library.getLibraryStats(library));

// Test Member Class
const member = new Member("John Doe", "M001");
console.log("\nBorrowing book...");
member.borrowBook(library, "978-0-7432-7356-5");
console.log("Member's borrowed books:", member.getBorrowedBooks());
console.log("Books in library:", library.listAllBooks());

// Test PremiumMember Class
const premiumMember = new PremiumMember("Jane Smith", "PM001");
console.log("\nPremium Member Max Books:", PremiumMember.getMaxBooks());
premiumMember.borrowBook(library, "978-0-452-28423-4");
console.log("Premium Member borrowed books:", premiumMember.getBorrowedBooks());

// Test Static Method
const randomBook = Book.createRandomBook();
console.log("\nRandom Book:", randomBook.getInfo());
*/

console.log("Complete all TODO sections, then uncomment the tests above!");
