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


@NgModule({
  declarations: [
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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // unlock http service
    FormsModule, 
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
