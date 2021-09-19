import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title="Books"

  books=[{
    title: '',
    author: '',
    genre: '',
    image: '',
    }]

  constructor(private bookService:BookserviceService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books)
    });
  
  }
  viewBook(book:any){
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['book'])
  }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update-book']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
    console.log(book);
  

  }

}
