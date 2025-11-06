
  // TODO: Create a constructor that takes title, author, and isbn as parameters
  // TODO: Assign these parameters to instance properties (this.title, this.author, this.isbn)
  // TODO: Create a method called getInfo() that returns a string like:
  // "Title: [title], Author: [author], ISBN: [isbn]"
  // TODO: Create a getter called isAvailable that returns true


  class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
      }
      getInfo(){
          return`Title:${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`
      }
      
      get isAvailable(){
          return true;
      }
  }

  console.log("=============Book Details=============")
  const book1 = new Book("The Great Gatsby",
  "F. Scott Fitzgerald",
  "978-0-7432-7356-5");

  ("Book Info:", book1.getInfo());
  console.log("Is Available:", book1.isAvailable);



  class Library {
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(isbn){
        const index = this.books.findIndex((book) => book.isbn === isbn);
        if(index !==-1){
            this.books.splice(index,1);
            return true;
        }
        return false;
    }
    findBook(isbn){
        return this.books.find((book) => book.isbn === isbn) || null;
    }
    listAllBooks(){
        return this.books;
    }
    static getLibraryStats(library){
        const totalBooks = library ? library.books.length : 0 ;
        return {
            totalBooks: totalBooks,
            sample: `This library has ${totalBooks} books`,
        };
    }
}

console.log("\n=== Testing Library Class ===");
const library = new Library();
library.addBook(book1);
library.addBook(new Book("1984", "George Orwell", "978-0-452-28423-4"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"));
console.log("All Books:",library.listAllBooks().map((book) => book.getInfo()));
console.log("Library Stats:", Library.getLibraryStats(library));









