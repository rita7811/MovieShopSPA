import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCard } from 'src/app/Shared/Models/movie-card';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/Shared/Models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MovieCardsService {

  constructor(private http:HttpClient) { }

  getTopGrossingMovies():Observable<MovieCard[]>
  {
    return this.http.get<MovieCard[]>('https://localhost:7058/api/Movies/top-grossing');
  }

  // getMovieDetails(id:number){
  //   return this.http.get<MovieDetails[]>('https://localhost:7058/api/Movies/id');

  // }

  // getMovieByGenre(genreId:number){

  // }
}
