import { Component, OnInit } from '@angular/core';
import { MovieCardsService } from 'src/app/Core/Services/movie-cards.service';
import { MovieCard } from 'src/app/Shared/Models/movie-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies!:MovieCard[];
  constructor(private service:MovieCardsService) { }

  ngOnInit(): void {
    this.service.getTopGrossingMovies().subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

}
