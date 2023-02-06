/* Modul za registraciju Material komponenti */

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { ProfileComponent } from "./auth/profile/profile.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { FilteredFlightsComponent } from "./all-flights/filtered-flights/filtered-flights.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FlightDetailsComponent } from "./all-flights/flight-details/flight-details.component";
import { PopularCityComponent } from "./popular/popular-city/popular-city.component";
import { JournalComponent } from "./journal/journal.component";

const rute: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'filtered', component: FilteredFlightsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'flightDetails/:id', component: FlightDetailsComponent },
  { path: 'popularCity', component: PopularCityComponent },
  { path: 'journal', component: JournalComponent }




]


@NgModule({

  imports: [RouterModule.forRoot(rute)],
  exports: [RouterModule]

})


export class RoutingModule {

}
