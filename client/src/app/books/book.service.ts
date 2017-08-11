import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Book } from "./book.model";


@Injectable() // add some metadata (like @Component) so angular will be able to inject the http service into this class
export class BookService{
    private books: Book[] = [];
    bookIsEdit = new EventEmitter<Book>();

    addBook(book: Book){
        
        const body = JSON.stringify(book);
        const headers = new Headers({'Content-Type': 'application/json'});
        // this will not send the request. its only set up an observable       
        return this.http.post('http://localhost:3000/book', body, {headers: headers})
        //the map function allows to transform the data once it comes from the server
        // the json function - gets the data from the reaponse and turn it to a json object.
        .map((response: Response) => {
            const result = response.json();
            const book = new Book(result.obj.name, result.obj.author, result.obj._id);
            this.books.push(book);
            return book;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    getBooks(){
        return this.http.get('http://localhost:3000/book')
        .map((response: Response) => {
            const books = response.json().obj;
            let transformedBooks: Book[] = [];
            for (let book of books) {
                transformedBooks.push(new Book(book.name, book.author, book._id))
            }
            this.books = transformedBooks; // ???
            return transformedBooks;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    editBook(book: Book){
        this.bookIsEdit.emit(book);
    }

    updateBook(book: Book) {
        const body = JSON.stringify(book);
        const headers = new Headers({'Content-Type': 'application/json'});
        // this will not send the request. its only set up an observable       
        return this.http.patch('http://localhost:3000/book/' + book.bookId, body, {headers: headers})
        //the map function allows to transform the data once it comes from the server
        // the json function - gets the data from the reaponse and turn it to a json object.
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));

    }
    deleteBook(book :Book) {
        this.books.splice(this.books.indexOf(book), 1);
         return this.http.delete('http://localhost:3000/book/' + book.bookId)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }   
    constructor(private http:Http){
        console.log('Task Service Initioalized');
        
    }
}