import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title="Authors"

  
  authors=[{
    name: '',
    born: '',
    image: '',
    }]

  constructor(private authorService:AuthorserviceService, private router:Router, public _auth:AuthService) { }

  ngOnInit(): void {

    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors)
    });

  }

  editAuthor(author:any){
    localStorage.setItem('editAuthorId', author._id.toString());
    this.router.navigate(['update-author']);
  }

  deleteAuthor(author:any){
    this.authorService.deleteAuthor(author._id)
    .subscribe(data =>{
      this.authors = this.authors.filter(p => p !== author);
    })
    console.log(author);
  }

}
