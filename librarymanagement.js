  class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this._isAvailable = true;
      }
      getInfo(){
          return `Title:${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`
      }
      
      get isAvailable(){
          return this._isAvailable;
      }
      
      set isAvailable(value){
          this._isAvailable = value;
      }
  }

  console.log("=============Book Details=============")
  const book1 = new Book("The Great Gatsby",
  "F. Scott Fitzgerald",
  "978-0-7432-7356-5"
);

  console.log("Book Info:", book1.getInfo());
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
library.addBook(new Book("1984", "George Orwell", "978-0-452-28423-4"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"));
library.addBook(new Book("1984", "George Orwell", "978-0-452-28423-4"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"));
console.log("Library Stats:", Library.getLibraryStats(library));





class Member {
    constructor(name, memberId){
        this.name = name; 
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    getMaxBooks(){
        return 3;
    }
    
    borrowBook(library, isbn) {
        const book = library.findBook(isbn);
        if(book && this.borrowedBooks.length < this.getMaxBooks()){
            this.borrowedBooks.push(book);
            library.removeBook(isbn);
            return true;
        }
        return false;
    }
    
    returnBook(library,isbn) {
        const bookIndex = this.borrowedBooks.findIndex((book) => book.isbn === isbn);
        if(bookIndex !== -1){
            const book = this.borrowedBooks[bookIndex];
            this.borrowedBooks.splice(bookIndex,1);
            library.addBook(book);
            return true;
        }
        return false;
    }
    getBorrowedBooks(){
        return this.borrowedBooks;
    }
}




console.log("\n=== Testing Member Class ===");
const member = new Member("John Doe", "M001");
console.log("Borrowing book...");
const borrowed = member.borrowBook(library, "978-0-7432-7356-5");
console.log("Borrowed successfully:", borrowed);
console.log(
  "Member's borrowed books:",
  member.getBorrowedBooks().map((book) => book.getInfo())
);
console.log(
  "Books in library:",
  library.listAllBooks().map((book) => book.getInfo())
);




class PremiumMember extends Member{
    constructor(name,memberId){
        super(name,memberId);
    }
    borrowBook(library,isbn){
        const book = library.findBook(isbn);
        if(book && this.borrowedBooks.length < this.getMaxBooks()) {
            this.borrowedBooks.push(book);
            library.removeBook(isbn);
            return true;
        }
        return false;
    }
    getMaxBooks(){
        return 5;
    }
    static getMaxBooks(){
        return 5;
    }
}


console.log("\n=== Testing PremiumMember Class ===");
const premiumMember = new PremiumMember("Jane Smith", "PM001");
console.log("Premium Member Max Books:", PremiumMember.getMaxBooks());
premiumMember.borrowBook(library, "978-0-452-28423-4");
premiumMember.borrowBook(library, "978-0-06-112008-4");
console.log(
  "Premium Member borrowed books:",
  premiumMember.getBorrowedBooks().map((book) => book.getInfo())
);
console.log(
  "Books in library:",
  library.listAllBooks().map((book) => book.getInfo())
);







