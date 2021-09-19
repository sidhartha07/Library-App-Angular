import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {
  private _baseUrl= "http://localhost:5000/"

  constructor(private http:HttpClient) { }

  getAuthor(id:any){
    return this.http.get(this._baseUrl+"authors"+id);
  }

  getAuthors(){
    return this.http.get(this._baseUrl+"authors");
  }

  newAuthor(author:any){
    return this.http.post<any>(this._baseUrl+"authors/add",author)
    .subscribe(data => {console.log(data)})
  }

  deleteAuthor(id:any){
    return this.http.delete(this._baseUrl+"authors/remove/"+id)
  }

  editAuthor(author:any){
    console.log('Client update', author)
    return this.http.put(this._baseUrl+"authors/update",author)
    .subscribe(data => {console.log(data)})
  }

}
