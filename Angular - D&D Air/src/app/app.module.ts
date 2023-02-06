import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './auth/signup/user.service';
import { FilteredFlightsComponent } from './all-flights/filtered-flights/filtered-flights.component';
import { FilteredDataService } from './filteredData.service';
import { PopularComponent } from './popular/popular.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BestOfferFlightsComponent } from './all-flights/best-offer-flights/best-offer-flights.component';
import { RecommendedFlightsComponent } from './all-flights/recommended-flights/recommended-flights.component';
import { FlightDetailsComponent } from './all-flights/flight-details/flight-details.component';
import { PopularCityComponent } from './popular/popular-city/popular-city.component';
import { JournalComponent } from './journal/journal.component';
import { UpcomingFlightsComponent } from './journal/upcoming-flights/upcoming-flights.component';
import { FinishedFlightsComponent } from './journal/finished-flights/finished-flights.component';
import { CanceledFlightsComponent } from './journal/canceled-flights/canceled-flights.component';
import { PopupComponent } from './popup/popup.component';
import { PopupBookingComponent } from './popup-booking/popup-booking.component';



@NgModule({
  //Ono sto mi custom napravimo
  declarations: [
    //Ovo je klasa iz tajpskripta
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    FilteredFlightsComponent,
    PopularComponent,
    ProfileComponent,
    BestOfferFlightsComponent,
    RecommendedFlightsComponent,
    FlightDetailsComponent,
    PopularCityComponent,
    JournalComponent,
    UpcomingFlightsComponent,
    FinishedFlightsComponent,
    CanceledFlightsComponent,
    PopupComponent,
    PopupBookingComponent
  ],
  //Ono sto je importovano iz node modules
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    UserService,
    FilteredDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
