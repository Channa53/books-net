import { Component, OnInit } from "@angular/core";
import { Book } from './book.model';
import { BookService } from "./book.service";

@Component({
    selector: "app-books-slider",
    templateUrl: "./books-slider.component.html" 
})
export class BooksSliderComponent implements OnInit{
    books: Book[] = [];

    constructor(private bookService: BookService){}

    ngOnInit(){
        this.bookService.getBooks();
    }
}