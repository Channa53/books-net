import { Component, OnInit } from "@angular/core";
import { BookService } from "./book.service";
import { Book } from "./book.model";
import { NgForm } from "@angular/forms"

@Component({
    selector: 'app-book-input',
    templateUrl: './book-input.component.html'
})
export class BookInputComponent implements OnInit { 

    book: Book;

    constructor(private bookService: BookService) {} //angular calls this constructor

    onSubmit(form: NgForm){
        if (this.book){
            // edit. this book reference to the book in global array
            this.book.name = form.value.bookName;
            this.book.author = form.value.bookAuthor;
            this.bookService.updateBook(this.book)
                .subscribe(
                    result => console.log(result)
                );
            this.book = null;
        } else {
            // create
            const book = new Book (form.value.bookName, form.value.bookAuthor)
            this.bookService.addBook(book)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error),
                
                );
            form.resetForm();
        }      
    }

    onClear(form: NgForm) {
        this.book = null;
        form.resetForm();
    }

    
    ngOnInit(){
        // called when the edit button is clicked
        this.bookService.bookIsEdit.subscribe(
            // get the current book from the list that is being editing
            (book: Book) => this.book = book
        );
    }
}