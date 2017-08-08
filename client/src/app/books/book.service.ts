import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Book } from "./book.model";


@Injectable() // add some metadata (like @Component) so angular will be able to inject the http service into this class
export class BookService{
    books: Book[] = [];

    addBook(book: Book){
        this.books.push(book);
        const body = JSON.stringify(book);
        const headers = new Headers({'Content-Type': 'application/json'});
        // this will not send the request. its only set up an observable       
        return this.http.post('http://localhost:3000/book', body, {headers: headers})
        //the map function allows to transform the data once it comes from the server
        // the json function - gets the data from the reaponse and turn it to a json object.
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
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