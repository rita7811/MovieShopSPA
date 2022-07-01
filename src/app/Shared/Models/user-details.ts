import { Favorite } from "./favorite";
import { Movie } from "./movie";
import { Purchase } from "./purchase";
import { Review } from "./review";

export interface UserDetails {
    Movies:Movie[];
    Purchases:Purchase[];
    Reviews:Review[];
    Favorites:Favorite[];

    in:number;
    firstName:string;
    lastName:string;
    email:string;
    dateOfBirth:string;
    phoneNumber:string;
}
