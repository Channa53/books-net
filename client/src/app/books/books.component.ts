import { Component } from "@angular/core";

@Component({
    selector: "app-books",
    template: `
        <app-book-input></app-book-input><hr>
        <app-book-list></app-book-list>
    `
})
export class BooksComponent{

}