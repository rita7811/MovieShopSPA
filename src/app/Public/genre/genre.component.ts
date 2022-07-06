import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/Core/Services/genre.service';
import { Genre } from 'src/app/Shared/Models/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres!:Genre[];  //non-null (a postfix ! will remove null and undefined from the type of an expression)
  deleteFlag:Boolean = false;

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(g => {
      this.genres = g;
      console.table(this.genres);
    });
  }

  deleteGenre(id:number){
    this.genreService.deleteGenre(id).subscribe(p => {
      this.deleteFlag = true;
    });
    
    // this.deleteFlag = true;
  }

}
