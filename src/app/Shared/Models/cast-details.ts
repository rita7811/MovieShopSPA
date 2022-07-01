import { Movie } from "./movie";

export interface CastDetails {
    Movies:Movie[];

    id:number;
    name:string;
    gender:string;
    tmdbUrl:string;
    profilePath:string;
}
