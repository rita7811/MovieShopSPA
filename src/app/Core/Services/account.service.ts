import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserLogin } from 'src/app/Shared/Models/user-login';
import { UserRegister } from 'src/app/Shared/Models/user-register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  logIn(login:UserLogin):Observable<boolean>{
    return this.http.post('https://localhost:7058/api/Account/login', login).pipe(map((response:any) => {
      if (response){
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
    }))
  }

  LogOut(){
    localStorage.removeItem('token');
  }

  Register(registration:UserRegister):Observable<boolean>{
    return this.http.post<boolean>('https://localhost:7058/api/Account/register', registration);
  }

}
