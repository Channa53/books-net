import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BookComponent } from './books/book.component';
import { UsersComponent } from './users/users.component';
import { BookListComponent } from './books/book-list.component';
import { BookInputComponent } from './books/book-input.component';
import { BooksComponent } from "./books/books.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { BooksSliderComponent } from "./books/books-slider.component";


@NgModule({
  declarations: [ // all components in the project
    AppComponent,
    BookComponent,
    UsersComponent, 
    BookListComponent,
    BookInputComponent,
    BooksComponent,
    AuthenticationComponent,
    HeaderComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent,
    BooksSliderComponent
  ],
  imports: [ // all amgular module we want to unlock for the project
    BrowserModule,
    HttpModule, 
    FormsModule, 
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
