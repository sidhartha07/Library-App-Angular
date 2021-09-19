import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private _baseUrl= "http://localhost:5000/"
  constructor(private http:HttpClient) { }
  getBook(id:any){
    return this.http.get(this._baseUrl+"books/"+id);
  }

  getBooks(){
    return this.http.get(this._baseUrl+"books");
  }

  newBook(book:any)
  { 
    return this.http.post<any>(this._baseUrl+"books/add",book)
    .subscribe(data =>{console.log(data)})
  }

  deleteBook(id:any)
  {

    return this.http.delete(this._baseUrl+"books/remove/"+id)

  }

  editBook(book:any)
  {
    console.log('client update',book)
    return this.http.put(this._baseUrl+"books/update",book)
    .subscribe(data =>{console.log(data)})
  }

}
