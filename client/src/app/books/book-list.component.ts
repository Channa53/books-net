import { Component, OnInit } from "@angular/core";
import { Book } from './book.model';
import { BookService } from "./book.service";

@Component({
    selector: "app-book-list",
    template: `
        <div class="col-md-9 col-md-offset-2">
            <app-book [book]="book" (editClicked)="book.name = $event" *ngFor="let book of books"></app-book>
        </div>   
    `
})
export class BookListComponent implements OnInit{
    books: Book[] = [];

    constructor(private bookService: BookService){}

    ngOnInit(){
        //refernce the local books array to the service's book array. array in JS is an object reference!!
        this.books = this.bookService.getBooks();
    }
}