import { Component } from "@angular/core";
import { BookService } from "./book.service";
import { Book } from "./book.model";
import { NgForm } from "@angular/forms"

@Component({
    selector: 'app-book-input',
    templateUrl: './book-input.component.html'
})
export class BookInputComponent { 

    constructor(private bookService: BookService) {} //angular calls this constructor

    onSubmit(form: NgForm){
        const book = new Book (form.value.bookName, form.value.bookAuthor)
        this.bookService.addBook(book).subscribe(
            data => console.log(data),
            error => console.error(error),
            
        );
        form.resetForm();
    }
}