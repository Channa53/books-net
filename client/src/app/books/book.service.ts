import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';

import { Book } from "./book.model";


@Injectable()
export class BookService{
    books: Book[] = [];

    addBook(book: Book){
        this.books.push(book);
        console.log(this.books);
    }

    getBooks(){
        return this.books;
    }

    deleteBook(book :Book) {
        this.books.splice(this.books.indexOf(book), 1);
    }   
    constructor(private http:Http){
        console.log('Task Service Initioalized');
        
    }
}