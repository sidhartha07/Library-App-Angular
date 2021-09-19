import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule ,HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BookserviceService } from './bookservice.service';
import { AuthorserviceService } from './authorservice.service';
import { AuthService } from './auth.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { BookComponent } from './book/book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    AuthorsComponent,
    AddbookComponent,
    AddauthorComponent,
    SignupComponent,
    UpdateBookComponent,
    BookComponent,
    UpdateAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BookserviceService,AuthorserviceService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
