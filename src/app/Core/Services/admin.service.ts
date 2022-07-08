import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/Shared/Models/cast';
import { MovieRequest } from 'src/app/Shared/Models/movie-request';
import { Purchase } from 'src/app/Shared/Models/purchase';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  createMovie(addMovie:MovieRequest):Observable<boolean>{
    return this.http.post<boolean>('https://localhost:7058/api/Admin/movie', addMovie);
  }

  createCast(addCast:Cast):Observable<boolean>{
    return this.http.post<boolean>('', addCast);
  }

  getTopPurchases():Observable<Purchase[]>{
    return this.http.get<Purchase[]>('');
  }
}
