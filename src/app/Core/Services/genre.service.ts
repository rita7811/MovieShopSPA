import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/Shared/Models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }

  getAllGenres():Observable<Genre[]>
  {
    return this.http.get<Genre[]>('https://localhost:7058/api/Genres');
  }

  addGenre(genre:Genre)
  {
    return this.http.post('https://localhost:7058/api/Genres/add', genre);
  }

  deleteGenre(genreId:number)
  {
    return this.http.delete('https://localhost:7058/api/Genres/delete/id:int?id='+genreId);
  }
}
