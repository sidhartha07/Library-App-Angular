import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

title="Update Book"

book={
  title: '',
  author: '',
  genre: '',
  image: ''
  }

  constructor(private router:Router,private bookService:BookserviceService) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem("editBookId");
    this.bookService.getBook(BookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

  editBook()
  {    
    this.bookService.editBook(this.book);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
