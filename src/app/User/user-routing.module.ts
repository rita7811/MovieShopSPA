import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'Profile/:id', component: ProfileComponent },
  { path: 'Purchases/:id', component: PurchasesComponent },
  { path: 'Favorites/:id', component: FavoritesComponent },
  { path: 'Reviews/:id', component: ReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
