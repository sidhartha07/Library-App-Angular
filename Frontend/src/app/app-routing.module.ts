import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "books"
  },
  {
    path:'books', 
    component:BooksComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path:'authors', 
    component:AuthorsComponent
  },
  {
    canActivate:[AuthGuard],
    path:'addbook', 
    component:AddbookComponent
  },
  {
    canActivate:[AuthGuard],
    path:'addauthor', 
    component:AddauthorComponent
  },
  {
    path:'signup', 
    component:SignupComponent
  },
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path:'update-book',
    component:UpdateBookComponent
  },
  {
    path:'update-author',
    component:UpdateAuthorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
