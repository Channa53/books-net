import { Component } from '@angular/core';
import { BookService } from './books/book.service'; 
import { Book } from './books/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService] // this provider creates only one book service for the whole application. provider in specific component creates one specific instant for the component
})
export class AppComponent {

}
