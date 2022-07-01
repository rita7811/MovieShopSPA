// import { Movie } from "./movie";

export interface ReviewCard {
    // Movies:Movie[];
    
    movieId:number;
    userId:number;
    rating:number;
    reviewText:string;
    movieTitle:string;
    moviePosterUrl:string;
}
