import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./books/books.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'books', component: BooksComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);