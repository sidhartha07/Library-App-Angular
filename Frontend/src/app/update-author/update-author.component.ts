import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  title= "Update Author";

  author = {
    name: '',
    born: '',
    image: ''
  }

  constructor(private router:Router, private authorService:AuthorserviceService) { }

  ngOnInit(): void {
    let AuthorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(AuthorId).subscribe((data) =>{
      this.author = JSON.parse(JSON.stringify(data));
    })
  }

  editAuthor(){
    this.authorService.editAuthor(this.author);
    alert("Success");
    this.router.navigate(['authors']);
  }
}
