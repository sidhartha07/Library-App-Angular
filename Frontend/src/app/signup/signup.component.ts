import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    name:'',
    username:'',
  password:''
}

  constructor(private _auth: AuthService,
    private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  signUpUser() {
    
    this._auth.signupUser(this.user)
    .subscribe(
      res => {
        this._router.navigate(['login'])
      },
      err => {
        console.log(err);
        this._router.navigate(['signup'])
      }
    ) 
  }

}
