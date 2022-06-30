import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PurchasesComponent } from './purchases/purchases.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    PurchasesComponent,
    FavoritesComponent,
    ReviewsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
