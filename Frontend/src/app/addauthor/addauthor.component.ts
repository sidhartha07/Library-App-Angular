import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../author.model';
import { AuthorserviceService } from '../authorservice.service';
import { BookModel } from '../book.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  title="Add Author"

  author = new AuthorModel(null,null,null);

  constructor(private router:Router, private authorService:AuthorserviceService) { }

  ngOnInit(): void {
  }

  AddAuthor()
  {
    this.authorService.newAuthor(this.author);
    console.log("Called",this.author);
    this.router.navigate(['authors']);
  }

}
