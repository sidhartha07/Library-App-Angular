import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
import { BookModel } from '../book.model'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  title="Add Book"

  book=new BookModel(null,null,null,null);

  constructor(private router:Router,private bookService:BookserviceService) { }

  ngOnInit(): void {
  }

  AddBook()
  {    
    this.bookService.newBook(this.book); 
    console.log("Called",this.book);    
    this.router.navigate(['books']);
  }

}
