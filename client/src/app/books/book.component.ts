import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';


@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book ; //get book property from app component
  @Output() editClicked = new EventEmitter<string>(); // its not regular property, its event emiter so we have to use event emitter

  constructor(private bookService: BookService){

  }

  onEdit(){
    this.editClicked.emit("worksssss");
  }

  onDelete() {
    this.bookService.deleteBook(this.book);
  }

}
