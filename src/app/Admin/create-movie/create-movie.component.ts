import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Core/Services/admin.service';
import { MovieRequest } from 'src/app/Shared/Models/movie-request';
import { DecimalPipe, DatePipe } from '@angular/common';
// import { RxwebValidators } from '@rxweb/reactive-form-validators'

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  requestMovieForm: FormGroup;
  requested:boolean=false;
  submitted:boolean=false;
  failed:boolean=false;

  constructor(private fb:FormBuilder, private createMovieService:AdminService) { } //, private _router:Router

  ngOnInit(): void {
    this.requestMovieForm = this.fb.group({
      id: 0,
      title: [ '', Validators.required],
      overview: [''],
      tagline: [''],
      budget: [''], 
      revenue: ['' ],
      imdbUrl: [''],
      tmdbUrl: [''],
      posterUrl: [''],
      backdropUrl: [''],
      originalLanguage: ['',],
      releaseDate: [''],
      runTime: [''],
      price: [''],
      createdDate: [''],
      updatedDate: [''],
      createdBy: [''],
      updatedBy: [''],
    });
  }

  get requestMovieFormControl(){
    return this.requestMovieForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.requestMovieForm.valid){
      console.table(this.requestMovieForm.value);

      const addMovie:MovieRequest = {
        id: this.requestMovieForm.controls['id'].value,
        title: this.requestMovieForm.controls['title'].value,
        overview: this.requestMovieForm.controls['overview'].value,
        tagline: this.requestMovieForm.controls['tagline'].value,
        budget: this.requestMovieForm.controls['budget'].value.DecimalPipe,
        revenue: this.requestMovieForm.controls['revenue'].value.DecimalPipe,
        imdbUrl: this.requestMovieForm.controls['imdbUrl'].value,
        tmdbUrl: this.requestMovieForm.controls['tmdbUrl'].value,
        posterUrl: this.requestMovieForm.controls['posterUrl'].value,
        backdropUrl: this.requestMovieForm.controls['backdropUrl'].value,
        originalLanguage: this.requestMovieForm.controls['originalLanguage'].value,
        releaseDate: this.requestMovieForm.controls['releaseDate'].value.DatePipe,
        runTime: this.requestMovieForm.controls['runTime'].value.DecimalPipe,
        price: this.requestMovieForm.controls['price'].value.DecimalPipe,
        createdDate: this.requestMovieForm.controls['createdDate'].value.DatePipe,
        updatedDate: this.requestMovieForm.controls['updatedDate'].value.DatePipe,
        createdBy: this.requestMovieForm.controls['createdBy'].value,
        updatedBy: this.requestMovieForm.controls['updatedBy'].value,
      };

      this.createMovieService.createMovie(addMovie).subscribe( m => {
        if (m) {
          this.requested = true;
          // setTimeout(() => {
          //   this._router.navigateByUrl('/Movie/Details/:id');
          // }, 10000);
        } 
        this.failed = true;
      })
    }
  }


}
