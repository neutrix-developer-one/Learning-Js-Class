
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
          console.log(`Title:${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`)
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