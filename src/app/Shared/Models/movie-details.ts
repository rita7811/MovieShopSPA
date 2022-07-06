import { Cast } from "./cast";
import { Genre } from "./genre";
import { Review } from "./review";
import { Trailer } from "./trailer";

export interface MovieDetails {
    Genres:Genre[];
    Casts:Cast[];
    Trailers:Trailer[];
    Reviews:Review[];
    
    id:number;
    title:string;
    posterUrl:string;
    backdropUrl:string;
    rating:number;
    overview:string;
    tagline:string;
    budget:number;
    revenue:number;
    imdbUrl:string;
    tmdbUrl:string;
    releaseDate:string; //Date
    runTime:number;
    price:number;
}
