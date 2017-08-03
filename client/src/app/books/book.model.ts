export class Book {
    name: String;
    author: string;
    bookId?: string; // this field can be empty because of "?"  

    constructor(name: string, author: string, bookId?: string){
        this.name = name;
        this.author = author;
        this.bookId = bookId;
    }
}