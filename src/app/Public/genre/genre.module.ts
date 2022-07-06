import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenreRoutingModule } from './genre-routing.module';

import { GenreComponent } from './genre.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    GenreComponent, 
    AddGenreComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class GenreModule { }
