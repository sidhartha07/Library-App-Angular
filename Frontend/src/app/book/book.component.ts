import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title="Book"
  book={
    title: '',
    author: '',
    genre: '',
    image: '',
    }
  constructor(private router:Router,private bookService:BookserviceService) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem("editBookId");
    this.bookService.getBook(BookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

}
