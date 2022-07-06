import { Component, OnInit } from '@angular/core';
import { MovieCardsService } from 'src/app/Core/Services/movie-cards.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private servie:MovieCardsService) { }

  ngOnInit(): void {
    // this.servie.getMovieDetails().subscribe(m => {
      

    // })
  }

}
