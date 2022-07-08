import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/Core/Services/account.service';
import { UserLogin } from 'src/app/Shared/Models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logined:boolean=false;
  login:UserLogin={email: "", password: ""};
  // email:string='';
  // password:string=''

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:NgForm){
    this.login.email = loginForm.value.email;
    this.login.password = loginForm.value.password;

    this.accountService.logIn(this.login).subscribe(l => {
      this.logined = true;
    });
  }

  resetForm(genreForm:NgForm){
    genreForm.resetForm();
  }

}
